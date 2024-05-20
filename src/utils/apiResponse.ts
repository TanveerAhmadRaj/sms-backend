

class ApiResponse {
    public statusCode: number;
    public message: string;
    public success: boolean;
    public data: Object;
    constructor (statusCode: number, message: string, data: Object){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode< 400;
    };
};


export  { ApiResponse };