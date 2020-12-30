import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { getConnection, Repository } from "typeorm";
import { Company } from "../entities/Company";
import { IValidationResult } from "../type";
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
            let result = await userRepository.find({
                where: { comId: company.comId },
            });
            if (result.length !== 0) {
                validationResult.err = "该企业已被注册";
                validationResult.result = false;
                return validationResult;
            }
            result = await userRepository.find({
                where: { name: company.name },
            });
            if (result.length !== 0) {
                validationResult.err = "该企业名称已被使用";
                validationResult.result = false;
                return validationResult;
            }
            validationResult.data = company;
            validationResult.result = true;
            return validationResult;
        }
        validationResult.err = validation;
        validationResult.result = false;
        return validationResult;
    }

    public getCompanyByUid = async (req: Request, res: Response) => {
        const uid = req.body.uid;

        const result = await (this.repository as Repository<Company>).find({
            where: {
                owner: uid,
            },
        });

        if (!result.length) {
            res.send(msg(false));
            return;
        }
        res.send(msg(result));
        return;
    };

    // 获取某个公司类型中的所有公司

    public getCompanyByTypeId = async (req: Request, res: Response) => {
        const typeId = parseInt(req.query.type as string, 10);

        try {
            const repository = getConnection().getRepository(Company);
            let companys = await repository.find();
            companys = companys.filter((c) => c.type.id === typeId);
            res.send(msg(companys));
        } catch (error) {
            res.send(msg(null, error));
        }
    };


    public getCompanyByCondition = async (req: Request, res: Response) => {
        const condition = req.body;
        const result = await (this.repository as Repository<Company>).find({
            where: condition
        })

        res.send(msg(result));
    }
}
