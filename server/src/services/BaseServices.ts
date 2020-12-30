import { Request, Response } from "express";
import { Repository } from "typeorm";
import { IValidationResult } from "../type";
import { msg } from "../utils/returnMsg";

export abstract class BaseServices {
	constructor(protected repository: Repository<any>) {}

	protected abstract recordValidationRule(newRecord: object);

	// 获取表中所有记录
	public getRecords = async (req: Request, res: Response) => {
		try {
			const result = await this.repository.find();
			res.send(msg(result));
		} catch (error) {
			res.send(msg(null, error));
		}
	};

	// 通过id获取记录
	public getRecordById = async (req: Request, res: Response) => {
		const id = req.query.id;

		try {
			const result = await this.repository.findOne(id as string);
			res.send(msg(result));
		} catch (error) {
			res.send(msg(null, error));
		}
	};

	// 通过id删除记录
	public deleteRecordById = async (req: Request, res: Response) => {
		const id = req.query.id;

		try {
			const result = await this.repository.findOne(id as string);

			if (result) {
				await this.repository.remove(result);
			}

			res.send(msg(result));
		} catch (error) {
			res.send(msg(null, error));
		}
	};

	// 保存新纪录
	public saveRecord = async (req: Request, res: Response) => {
		const newRecord = req.body;
		const validationResult: IValidationResult = await this.recordValidationRule(
			newRecord
		);
			// console.log(validationResult)
		if (validationResult.result) {
			const newUser = this.repository.create(validationResult.data);
			this.repository
				.save(newUser)
				.then((resp) => {
					res.send(msg(resp));
				})
				.catch((err) => {
					res.send(msg(null, err));
				});
			return;
		}
		res.send(msg(null, validationResult.err));
	};

	// 更新记录
	public updateRecord = async (req: Request, res: Response) => {
		const {id, ...record} = req.body.newRecord;
		const hasRecord = await this.repository.findOne(id);
		if (!hasRecord) {
			res.send(msg(null, '未找到该记录'))
			return;
		}
		try {
			await this.repository.update(id, record);
			const newRecord = await this.repository.findOne(id);
			// 返回更新后的记录
			res.send(msg(newRecord));
		} catch (error) {
			res.send(msg(null, error));
		}
	};
}
