import type { IUser } from "../interfaces/IUser.ts";
import type {ILoginRequest, IRegisterRequest} from "../interfaces/IAuth.ts";
import { api } from "./axios.ts";

interface AuthResponse {
    token : string;
    user: IUser;
}

export async function loginApi(data: ILoginRequest): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>("/auth/login", data);
    return res.data;
}

export async function registerApi(data: IRegisterRequest): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>("/auth/register", data);
    return res.data;
}

export async function getMeApi(token: string): Promise<IUser> {
    const res = await api.post<IUser>("/auth/me",{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    return res.data;
}