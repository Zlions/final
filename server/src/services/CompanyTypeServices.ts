import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { getConnection } from "typeorm";
import { CompanyType } from "../entities/CompanyType";
import { IValidationResult } from "../type";
import { BaseServices } from "./BaseServices";

export class CompanyTypeServices extends BaseServices {
	protected async recordValidationRule(newRecord: object) {
		const companyType = plainToClass(CompanyType, newRecord);
		const repository = getConnection().getRepository(CompanyType);

		const validationResult: IValidationResult = { result: false };

		const validation = await validate(companyType);

		if (validation.length === 0) {
			const result = await repository.find({where: {name: companyType.name}})

			if(result.length === 0) {
				validationResult.result = true;
				validationResult.data = companyType;
				return validationResult;
			}
			validationResult.result = false;
			validationResult.err = result;
			return validationResult;
		}
		validationResult.err = validation;
		return validationResult;
	}

	constructor() {
		super(getConnection().getRepository(CompanyType));
	}
}
