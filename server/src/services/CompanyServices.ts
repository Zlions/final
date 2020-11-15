import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { getConnection, Repository } from "typeorm";
import { Company } from "../entities/Company";
import { IValidationResult } from "../type";
import { encryption } from "../utils/encryption";
import { msg } from "../utils/returnMsg";
import { BaseServices } from "./BaseServices";

export class CompanyServices extends BaseServices {

	constructor() {
		super(getConnection().getRepository(Company));
	}

	async recordValidationRule(newRecord: object) {
		const company = plainToClass(Company, newRecord);
		const validation = await validate(company);
		const userRepository = getConnection().getRepository(Company);

		const validationResult: IValidationResult = { result: true };

		if (validation.length === 0) {
			await encryption(company);
			// 查看该邮箱是否已被注册
			const result = await userRepository.find({
				where: { email: company.email },
			});
			if (result.length === 0) {
				validationResult.data = company;
				return validationResult;
			}
			validationResult.err = "该邮箱已被注册";
			validationResult.result = false;
			return validationResult;
		}
		validationResult.err = validation;
		validationResult.result = false;
		return validationResult;
	}

	// 登陆
	public login = async (req: Request, res: Response) => {
		const name = req.query.name;
		const pwd = req.query.pwd;

		let company = await (this.repository as Repository<Company>).findOne({
			name: name as string,
		});

		if (!company) {
			company = await (this.repository as Repository<Company>).findOne({
				email: name as string,
			});
		}

		if (!company) {
			res.send(msg(null, "登陆失败，未查询到该用户"));
			return;
		}

		const result = await company.compare(pwd as string);

		if (result) {
			res.send(msg(result));
			return;
		}

		res.send(msg(null, "登陆失败，用户密码错误"));
	};

	// 重置密码
	public resetPwd = async (req: Request, res: Response) => {
		const id = req.query.id;
		try {
			await encryption(req.query);
			await (this.repository as Repository<Company>).update(
				id as string,
				req.query
			);
			res.send(msg(true));
		} catch (error) {
			res.send(msg(null, error));
		}
	};

	// 获取某个公司类型中的所有公司

	public getCompanyByTypeId = async (req: Request, res: Response) => {
		const typeId = parseInt(req.query.type as string, 10);

		try {
			const repository = getConnection().getRepository(Company);
			let companys = await repository.find();
			companys = companys.filter(c => c.type.id === typeId)
			res.send(msg(companys));
		} catch (error) {
			res.send(msg(null, error));
		}
	};
}
