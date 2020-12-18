import { Application } from "express";
import { UserRegService } from "../services/UserRegService";
import express from "express";

export class UserRegController {
    public userService: UserRegService;
    private router: express.Router = express.Router();

    constructor(private app: Application) {
        this.userService = new UserRegService();
        this.app.use("/api", this.routes());
    }

    private routes() {
        this.router.get("/user_reg/:id", this.userService.getRecordById);
        this.router.get("/user_reg", this.userService.getRecords);
        this.router.delete("/user_reg", this.userService.deleteRecordById);
        this.router.put("/user_reg", this.userService.updateRecord);
        this.router.post("/user_reg", this.userService.saveRecord);

        this.router.post("/user_reg/login", this.userService.login);
        this.router.post("/user_reg/resetPwd", this.userService.resetPwd);
        return this.router;
    }
}
