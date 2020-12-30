import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import { getConnection, Repository } from "typeorm";
import { Position } from "../entities/Position";
import { IValidationResult } from "../type";
import { msg } from "../utils/returnMsg";
import { BaseServices } from "./BaseServices";

export class PositionServices extends BaseServices {
    constructor() {
        super(getConnection().getRepository(Position));
    }

    async recordValidationRule(newRecord: object) {
        const position = plainToClass(Position, newRecord);
        const validation = await validate(position);

        const userRepository = getConnection().getRepository(Position);

        const validationResult: IValidationResult = { result: true };

        if (validation.length === 0) {
            let result = await userRepository.find({
                where: { name: position.name , belongTo: position.belongTo},
            });
            if (result.length !== 0) {
                validationResult.err = "该职位已经发布";
                validationResult.result = false;
                return validationResult;
            }
            validationResult.data = position;
            validationResult.result = true;
            return validationResult;
        }
        validationResult.err = validation;
        validationResult.result = false;
        return validationResult;
    }

    public getPositionByCid = async (req: Request, res: Response) => {
        const cid = req.body.cid;
        const result = await (this.repository as Repository<Position>).find({
            where: {
                belongTo: cid
            }
        })
        res.send(msg(result))
    }

    public getPositionByCondition = async (req: Request, res: Response) => {
        const condition = req.body;
        const result = await (this.repository as Repository<Position>).find({
            where: condition
        })

        res.send(msg(result));
    }

}
