import { Application } from "express";
import { CompanyTypeServices } from "../services/CompanyTypeServices";

export class CompanyTypeController {
	public companyTypeServices: CompanyTypeServices;
	constructor(private app: Application) {
		this.companyTypeServices = new CompanyTypeServices();
		this.routes();
	}

	public routes() {
		this.app.route("/companyType").get(this.companyTypeServices.getRecords);
		this.app
			.route("/companyType/:id")
			.get(this.companyTypeServices.getRecordById);
		this.app
			.route("/companyType")
			.post(this.companyTypeServices.saveRecord);
		this.app
			.route("/companyType")
			.delete(this.companyTypeServices.deleteRecordById);
		this.app
			.route("/companyType")
			.put(this.companyTypeServices.updateRecord);
	}
}
