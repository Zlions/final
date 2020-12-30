import express, { Application } from "express";
import { ResumeServices } from "../services/ResumeServices";

export class ResumeController {
	public ResumeServices: ResumeServices;
	private router: express.Router = express.Router();
	constructor(private app: Application) {
		this.ResumeServices = new ResumeServices();
		this.app.use("/api", this.routes());
	}

	public routes() {
		this.router.get("/resume", this.ResumeServices.getRecords);
		this.router.get("/resume/:id", this.ResumeServices.getRecordById);
		this.router.post("/resume", this.ResumeServices.saveRecord);
		this.router.delete("/resume", this.ResumeServices.deleteRecordById);
		this.router.put("/resume", this.ResumeServices.updateRecord);

		this.router.post('/resume/byUid', this.ResumeServices.getResumeByUid)
		return this.router;
	}
}
