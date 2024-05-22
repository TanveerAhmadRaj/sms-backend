import IUserCreation from "../interfaces/rolesInterface";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../constants";

class Role extends Model <IUserCreation>{};

Role.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        role_type: {
            type: DataTypes.ENUM
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "roles",
        modelName: "Role",
        timestamps: true
    }
)
export { Role };