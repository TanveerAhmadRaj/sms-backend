import IUserCreation from "../interfaces/userInterface";
import { DataTypes, Model} from "sequelize";
import { sequelize } from "../constants";


class User extends Model <IUserCreation> {

};
User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "users",
        modelName: "User",
        timestamps: true
    }
)
export { User };