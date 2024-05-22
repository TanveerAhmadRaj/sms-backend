import { ModelsRelationships } from "../models";
import {StudentController} from "../controllers/studentController"
import { Database } from "../db/database";
export const studentControllerInstance = StudentController.getInstance();
export const sequelize = Database.getInstance(); 
export const dbSyncronization = ModelsRelationships.getInstance();