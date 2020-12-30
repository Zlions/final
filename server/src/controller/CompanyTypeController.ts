import express, { Application, Router } from "express";
import { TableInheritance } from "typeorm";
import { CompanyTypeServices } from "../services/CompanyTypeServices";

export class CompanyTypeController {
    public companyTypeServices: CompanyTypeServices;
    private router: Router = express.Router();
    constructor(private app: Application) {
        this.companyTypeServices = new CompanyTypeServices();
        this.app.use("/api", this.routes());
    }

    public routes() {
        this.router.get("/companyType", this.companyTypeServices.getRecords);
        this.router.get(
            "/companyType/:id",
            this.companyTypeServices.getRecordById
        );
        this.router.post("/companyType", this.companyTypeServices.saveRecord);
        this.router.delete(
            "/companyType",
            this.companyTypeServices.deleteRecordById
        );
        this.router.put("/companyType", this.companyTypeServices.updateRecord);
        return this.router;
    }
}
