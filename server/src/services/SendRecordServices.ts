import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { getConnection, Repository } from "typeorm";
import { SendRecord } from "../entities/SendRecord";
import { IValidationResult } from "../type";
import { msg } from "../utils/returnMsg";
import { BaseServices } from "./BaseServices";

export class SendRecordServices extends BaseServices {
    constructor() {
        super(getConnection().getRepository(SendRecord));
    }

    async recordValidationRule(newRecord: object) {
        const sendRecord = plainToClass(SendRecord, newRecord);
        const validation = await validate(sendRecord);

        const repository = getConnection().getRepository(SendRecord);
        const validationResult: IValidationResult = { result: true };

        let result = await repository.find({
            where: { userId: sendRecord.userId, positionId: sendRecord.positionId },
        });

        if (validation.length === 0) {
            if (result.length === 0) {
                validationResult.data = sendRecord;
                validationResult.result = true;
                return validationResult;
            } 
            // else if (result.length === 1) {
            //     // console.log('length: 1', result[0].positionId.id, sendRecord.positionId)
            //     if (result[0].positionId.id === (sendRecord.positionId as unknown)) {
            //         validationResult.err = "你已申请过该职位，请勿重复申请";
            //         validationResult.result = false;
            //         return validationResult;
            //     } else {
            //         validationResult.data = sendRecord;
            //         validationResult.result = true;
            //         return validationResult;
            //     }
            // } 
            else {
                validationResult.err = "你已申请过该职位，请勿重复申请";
                validationResult.result = false;
                return validationResult;
            }
        } else {
            validationResult.err = validation;
            validationResult.result = false;
            return validationResult;
        }
    }

    getSendRecordByPositionId = async (req: Request, res: Response) => {
        const pid = req.body.pid;
        console.log(pid)
        const result = await (this.repository as Repository<SendRecord>).find({
            where: {
                positionId: pid
            }
        })
        res.send(msg(result))
    }
}
