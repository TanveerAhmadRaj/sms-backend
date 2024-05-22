import { Gender } from "../enums";

export interface IStudent {
    student_id: number;
    first_name: string;
    last_name: string;
    dob: Date;
    gender: Gender;
    status: boolean;
    
};
