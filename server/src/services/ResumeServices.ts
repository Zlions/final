import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { getConnection, Repository } from "typeorm";
import { Resume } from "../entities/Resume";
import { IValidationResult } from "../type";
import { msg } from "../utils/returnMsg";
import { BaseServices } from "./BaseServices";

export class ResumeServices extends BaseServices {
    protected async recordValidationRule(newRecord: object) {
        const resume = plainToClass(Resume, newRecord);
        const validation = await validate(resume);

        const resumeRepository = getConnection().getRepository(Resume);

        const validationResult: IValidationResult = { result: true };

        // 验证通过后
        if (validation.length === 0) {
            let result = await resumeRepository.find({
                where: { belongTo: resume.belongTo },
            });
            if (resume) {
                validationResult.data = resume;
                return validationResult;
            }
            validationResult.err = "一个用户只能有一张在线简历";
            validationResult.result = false;
            return validationResult;
        }
        validationResult.err = validation;
        validationResult.result = false;
        return validationResult;
    }
    constructor() {
        super(getConnection().getRepository(Resume));
    }

    public getResumeByUid = async (req: Request, res: Response) => {
        const uid = req.body.uid;

        const result = await (this.repository as Repository<Resume>).find({
            where: {
                belongTo: uid,
            },
        });

        if (!result.length) {
            res.send(msg(false));
            return;
        }
        res.send(msg(result));
    };
}
