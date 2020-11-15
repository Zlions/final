import { getConnection } from "typeorm";
import { Resume } from "../entities/Resume";
import { BaseServices } from "./BaseServices";

export class ResumeServices extends BaseServices {
	protected recordValidationRule(newRecord: object) {
		return true;
	}
	constructor() {
		super(getConnection().getRepository(Resume));
	}
}
