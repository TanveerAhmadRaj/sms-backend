


class ApiError extends Error {
    public statusCode: number;
    public success: boolean;
    public data: Object;
    public stack: string;
    constructor(statusCode: number, message: string, stack: string = ""){
        super(message)
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;

        if(stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }; 

};


export  { ApiError };