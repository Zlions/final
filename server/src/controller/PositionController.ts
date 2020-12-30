import express, { Application } from "express";
import { PositionServices } from "../services/PositionServices";

export class PositionController {
    public positionServices: PositionServices;
    private router: express.Router = express.Router();
    constructor(private app: Application) {
        this.positionServices = new PositionServices();
        this.app.use("/api", this.routes());
    }

    private routes() {
        // 获取同一种类型的所有公司

        // 增删改查
        this.router.get("/position/:id", this.positionServices.getRecordById);
        this.router.get("/position", this.positionServices.getRecords);

        this.router.delete("/position", this.positionServices.deleteRecordById);

        this.router.put("/position", this.positionServices.updateRecord);
        this.router.post("/position", this.positionServices.saveRecord);

        this.router.post('/position/byCid', this.positionServices.getPositionByCid)
        this.router.post('/position/condition', this.positionServices.getPositionByCondition)
		return this.router;
    }
}
