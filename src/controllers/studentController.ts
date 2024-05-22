import { Request, Response } from "express";
import { ApiResponse } from "../utils/apiResponse";
class StudentController {
  //All students go here.....
  private static instance: StudentController;
  private constructor() {};

  public static getInstance(): StudentController {

      if (!StudentController.instance) {
        StudentController.instance = new StudentController();
      }
      return StudentController.instance;
  }
  public async getAllStudents(req: Request, res: Response) {
     res.status(200)
     .json(
      new ApiResponse(200, "fetch all students successfully", {})
    )
  }
  public async getById(req: Request, res: Response) {
    res.status(200)
    .json(
      new ApiResponse(200, `Student with id: ${req.params.id} fetched successfully`, {})
    )
  }
  public async updateStudent(req: Request, res: Response){
    res.send(200).send("Updated student successfully");
  }
  public async deleteStudent(req: Request, res: Response){
    res.send(200).send("Student delete successfully");
  }
  public async addNewStudent(req: Request, res: Response){
    res.send("New student added successfully!..")
  }
}
export { StudentController };
