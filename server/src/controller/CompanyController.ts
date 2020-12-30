import express, { Application } from "express";
import { CompanyServices } from "../services/CompanyServices";

export class CompanyController {
    public companyServices: CompanyServices;
    private router: express.Router = express.Router();
    constructor(private app: Application) {
        this.companyServices = new CompanyServices();
        this.app.use("/api", this.routes());
    }

    private routes() {
        // 获取同一种类型的所有公司
        this.router.get("/company/getCompanyByTypeId", this.companyServices.getCompanyByTypeId);

        // 增删改查
        this.router.get("/company/:id", this.companyServices.getRecordById);
        this.router.get("/company", this.companyServices.getRecords);

        this.router.delete("/company", this.companyServices.deleteRecordById);

        this.router.put("/company", this.companyServices.updateRecord);
        this.router.post("/company", this.companyServices.saveRecord);

		// 用userId查找公司
		this.router.post('/company/getCompanyByUid', this.companyServices.getCompanyByUid);
        
        // 查询公司
        this.router.post('/company/condition', this.companyServices.getCompanyByCondition)
		return this.router;
    }
}
