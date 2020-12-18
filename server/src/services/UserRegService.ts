import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { getConnection, Repository } from "typeorm";
import { UserReg } from "../entities/UserReg";
import { msg } from "../utils/returnMsg";
import { BaseServices } from "./BaseServices";
import { IValidationResult } from "../type";
import { encryption } from "../utils/encryption";
export class UserRegService extends BaseServices {
	constructor() {
		super(getConnection().getRepository(UserReg));
	}

	// 验证函数，用来验证新用户的格式是否正确
	async recordValidationRule(newRecord: object) {

		// 将收到的参数转成成User对象
		const user = plainToClass(UserReg, newRecord);
		// 验证该对象是否符合验证规则
		const validation = await validate(user);

		// 获取user数据实体
		const userRepository = getConnection().getRepository(UserReg);

		const validationResult: IValidationResult = { result: true };

		// 当验证通过时
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
		const userIdentity = req.query.userIdentity as string;
		const pwd = req.query.pwd as string;

		let user = await (this.repository as Repository<UserReg>).findOne({
			name: userIdentity,
		});

		if (!user) {
			user = await (this.repository as Repository<UserReg>).findOne({
				email: userIdentity,
			});
		}

		// 
		if (!user) {
			user = await (this.repository as Repository<UserReg>).findOne({
				phone: userIdentity,
			});
		}

		if (!user) {
			res.send(msg(null, "登陆失败，未查询到该用户"));
			return;
		}

		const result = await user.compare(pwd);

		if (result) {
			res.send(msg(user.uid));
			return;
		}

		res.send(msg(null, "登陆失败，用户密码错误"));
	};

	// 重置密码
	public resetPwd = async (req: Request, res: Response) => {
		const id = req.query.userIdentity as string;
		try {
			await encryption(req.query);
			console.log(req.query)
			await (this.repository as Repository<UserReg>).update(
				{uid: id},
				{pwdHash: req.query.pwdHash as string}
			);
			res.send(msg(true));
		} catch (error) {
			res.send(msg(null, error));
		}
	};
}
