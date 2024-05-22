import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express"
import studentRoute from "./routes/studentRoutes";
import { dbSyncronization } from "./constants";

class App {
    public app: Application;
    public port: number;
    constructor(){
        this.port = 3000;
        this.app = express();
        this.setMiddleware();
        this.setRoutes();

    };


    //setting middlewares here....
    public setMiddleware(): void {
        this.app.use(express.json());
        this.app.use(cors({
            credentials: true
        }));
        this.app.use(compression());
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.syncAllModels();
    };
    public syncAllModels(): void {
        dbSyncronization.makeAllRelationships();
    };

    public setRoutes(): void {
        //Default route for the debuggin only..
        this.app.get("/", (req, res)=>{
            res.status(200)
            .json({
                message: "BACKEND OF SCHOOLS MANAGEMENT SYSTEMS"
            })
        });
        //initially this is empty... {Will add all routes here accordingly.....}
        this.app.use("/api/v1/students", studentRoute);
    };
    public listenPort(){
        this.app.listen(this.port, ()=>{
            console.log(`App i listening on http://localohst:${this.port}`);
            
        })
    };

};
const app = new App();
app.listenPort();