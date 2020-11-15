import { Application } from "express";
import { CompanyServices } from "../services/CompanyServices";

export class CompanyController {
	public companyServices: CompanyServices;
	constructor(private app: Application) {
		this.companyServices = new CompanyServices();
		this.routes();
	}

	private routes() {
		// 获取同一种类型的所有公司
		this.app
			.route("/company/getCompanyByTypeId")
			.get(this.companyServices.getCompanyByTypeId);

		// 增删改查
		this.app.route("/company/:id").get(this.companyServices.getRecordById);
		this.app.route("/company").get(this.companyServices.getRecords);

		this.app
			.route("/company")
			.delete(this.companyServices.deleteRecordById);

		this.app.route("/company").put(this.companyServices.updateRecord);
		this.app.route("/company").post(this.companyServices.saveRecord);

		// 登陆、重置密码
		this.app.route("/company/login").post(this.companyServices.login);
		this.app.route("/company/resetPwd").post(this.companyServices.resetPwd);
	}
}
