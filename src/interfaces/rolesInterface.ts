import { Rolls } from "../enums";
import { Optional } from "sequelize";



export interface IRoles {
    role_id: number;
    role_type: Rolls;
    user_id: number;
};


export default interface IRolesCreation extends Optional <IRoles, "role_id">{};