import express, { Application } from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import { UserController } from "./controller/UserController";
import { CompanyTypeController } from "./controller/CompanyTypeController";
import { CompanyController } from "./controller/CompanyController";
import { ResumeController } from "./controller/ResumeController";

class App {
	public app: Application;
	public userController: UserController;
	public companyTypeController: CompanyTypeController;
	public companyController: CompanyController;
	public resumeController: ResumeController;

	constructor() {
		this.app = express();
		this.setConfig();
		this.setDBConnection().then((resp) => {
			this.userController = new UserController(this.app);
			this.companyTypeController = new CompanyTypeController(this.app);
			this.companyController = new CompanyController(this.app);
			this.resumeController = new ResumeController(this.app);
		});
	}

	private setConfig() {
		this.app.use(bodyParser.json());
	}

	private async setDBConnection() {
		await createConnection();
	}
}

export default new App().app;
