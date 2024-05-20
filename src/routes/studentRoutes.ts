import { Router } from "express";
import { studentControllerInstance } from "../constants/index";


class StudentRoutes{
    public router: Router;
    constructor(){
        this.router = Router();
        this.initializeAllStudentsRoutes();
    }
    public initializeAllStudentsRoutes(){

        this.router.post("/add", studentControllerInstance.addNewStudent);
        this.router.get("/get-all", studentControllerInstance.getAllStudents);
        this.router.delete("/delete", studentControllerInstance.deleteStudent);
        this.router.patch("/update", studentControllerInstance.updateStudent);
        this.router.get("/:id", studentControllerInstance.getById);
    }
};

export default new StudentRoutes().router;