import express, { Application } from "express";
import { SendRecordServices } from "../services/SendRecordServices";

export class SendRecordController {
    public sendRecordServices: SendRecordServices;
    private router: express.Router = express.Router();
    constructor(private app: Application) {
        this.sendRecordServices = new SendRecordServices();
        this.app.use("/api", this.routes());
    }
    public routes() {
        this.router.get("/send_record", this.sendRecordServices.getRecords);
        this.router.post("/send_record", this.sendRecordServices.saveRecord);
        this.router.put("/send_record", this.sendRecordServices.updateRecord);
        this.router.delete(
            "/send_record",
            this.sendRecordServices.deleteRecordById
        );

        this.router.post(
            "/send_record/byPid",
            this.sendRecordServices.getSendRecordByPositionId
        );
        return this.router;
    }
}
