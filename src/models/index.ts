import { sequelize } from "../constants";
import { User } from "./user";
import { Role } from "./role";
class ModelsRelationships {
    private static _instance: ModelsRelationships;
    private constructor() {}

    public static getInstance(): ModelsRelationships{
        if (!ModelsRelationships._instance) {
            ModelsRelationships._instance = new ModelsRelationships();
        }
        return ModelsRelationships._instance
    }

    public makeAllRelationships(): void {
            /*
            
            Making relationship between Role and User Model...
            */
           User.hasOne(Role);
           Role.belongsTo(User);


           sequelize.sync({ force: false }).then(()=>{
            console.log("Database has been re-sync");
            
           }).catch((error)=>{console.log(error?.message || "Something went wrong!");
           })
    }
};

export { ModelsRelationships };