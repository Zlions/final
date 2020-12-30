import express, { Application } from "express";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import historyApi from "connect-history-api-fallback";
import { UserRegController } from "./controller/UserRegController";
import { CompanyTypeController } from "./controller/CompanyTypeController";
import { CompanyController } from "./controller/CompanyController";
import { ResumeController } from "./controller/ResumeController";
import path from "path";
import cors from "cors";
import { PositionController } from "./controller/PositionController";
import { SendRecordController } from "./controller/SendRecordController";

class App {
    public app: Application;
    public userRegController: UserRegController;
    public companyTypeController: CompanyTypeController;
    public companyController: CompanyController;
    public resumeController: ResumeController;
    public positionController: PositionController;
    public sendRecordController: SendRecordController;

    constructor() {
        this.app = express();
        this.setConfig();
        this.setDBConnection().then((resp) => {
            this.userRegController = new UserRegController(this.app);
            this.companyTypeController = new CompanyTypeController(this.app);
            this.companyController = new CompanyController(this.app);
            this.resumeController = new ResumeController(this.app);
            this.positionController = new PositionController(this.app);
            this.sendRecordController = new SendRecordController(this.app);
        });
    }

    private setConfig() {
        this.app.use(bodyParser.json());
        // 前端页面路由配置插件
        this.app.use(historyApi());
        // 设置跨域
        this.app.use(cors());
        // 设置静态资源路径
        this.app.use(
            express.static(
                path.resolve(__dirname, "../", "../", "client", "dist")
            )
        );
    }

    private async setDBConnection() {
        await createConnection();
    }
}

export default new App().app;
