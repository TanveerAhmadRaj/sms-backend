import { Sequelize } from "sequelize";




class Database {
    public static _isntance: Sequelize;
    private constructor(){};

    public static getInstance(): Sequelize {
        if (!Database._isntance) {
            Database._isntance = new Sequelize(
                "sms-backend", 
                "root",
                "123456",
                {
                    host: "localhost",
                    dialect: "mysql"
                }
            );
            return Database._isntance
        }
    };
};

export {Database};