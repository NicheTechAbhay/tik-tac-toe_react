interface LoginResponse {
    errorCode: number;
    message?: string;
    data?: any;
}

export function Login(email: any, password: any): Promise<LoginResponse>;