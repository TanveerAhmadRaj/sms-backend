import { Optional } from "sequelize";



export interface IUser {
    user_id: number;
    user_name: string;
    user_email: string;
    user_password: string
};
export default interface IUserCreation extends Optional <IUser, "user_id">{};