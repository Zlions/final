import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { getConnection, Repository } from "typeorm";
import { User } from "../entities/User";
import { msg } from "../utils/returnMsg";
import { BaseServices } from "./BaseServices";
import { IValidationResult } from "../type";
import { encryption } from "../utils/encryption";
export class UserService extends BaseServices {
	constructor() {
		super(getConnection().getRepository(User));
	}

	// 验证函数，用来验证新用户的格式是否正确
	async recordValidationRule(newRecord: object) {
		const user = plainToClass(User, newRecord);
		const validation = await validate(user);
		const userRepository = getConnection().getRepository(User);

		const validationResult: IValidationResult = { result: true };

		if (validation.length === 0) {
			await encryption(user);
			// 查看该邮箱是否已被注册
			const result = await userRepository.find({
				where: { email: user.email },
			});
			if (result.length === 0) {
				validationResult.data = user;
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

		let user = await (this.repository as Repository<User>).findOne({
			name: name as string,
		});

		if (!user) {
			user = await (this.repository as Repository<User>).findOne({
				email: name as string,
			});
		}

		if (!user) {
			res.send(msg(null, "登陆失败，未查询到该用户"));
			return;
		}

		const result = await user.compare(pwd as string);

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
			await (this.repository as Repository<User>).update(
				id as string,
				req.query
			);
			res.send(msg(true));
		} catch (error) {
			res.send(msg(null, error));
		}
	};
}
