import { Application } from "express";
import { UserService } from "../services/UserService";

export class UserController {
	public userService: UserService;

	constructor(private app: Application) {
		this.userService = new UserService();
		this.routes();
	}

	private routes() {
		this.app.route("/user/:id").get(this.userService.getRecordById);
		this.app.route("/user").get(this.userService.getRecords);
		this.app.route("/user").delete(this.userService.deleteRecordById);
		this.app.route("/user").put(this.userService.updateRecord);
		this.app.route("/user").post(this.userService.saveRecord);

		this.app.route("/user/login").post(this.userService.login);
		this.app.route("/user/resetPwd").post(this.userService.resetPwd);
	}
}
