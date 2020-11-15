import { Application } from "express";
import { ResumeServices } from "../services/ResumeServices";

export class ResumeController {
	public ResumeServices: ResumeServices;
	constructor(private app: Application) {
		this.ResumeServices = new ResumeServices();
		this.routes();
	}

	public routes() {
		this.app.route("/resume").get(this.ResumeServices.getRecords);
		this.app.route("/resume/:id").get(this.ResumeServices.getRecordById);
		this.app.route("/resume").post(this.ResumeServices.saveRecord);
		this.app.route("/resume").delete(this.ResumeServices.deleteRecordById);
		this.app.route("/resume").put(this.ResumeServices.updateRecord);
	}
}
