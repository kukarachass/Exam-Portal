import type {IUser} from "../../interfaces/IUser.ts";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getMeApi, loginApi, registerApi } from "../../api/auth.api.ts";

interface AuthState {
    user: IUser | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

interface AuthActions {
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (email: string, password: string, name: string) => Promise<void>;
    getMe: () => Promise<void>;
    logout: () => Promise<void>;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isLoading: false,
            error: null,

            async login(email, password){
                set({ isLoading: true, error: null });
                try{
                    const res = await loginApi({ email, password });
                    set({
                        user: res.user,
                        token: res.token,
                        isLoading: false,
                    })

                    return { success: true };
                }catch (e: unknown) {
                    let message = "Unknown error";
                    if (e instanceof Error) message = e.message;
                    set({ error: message, isLoading: false });
                    return { success: false, error: message };
                }
            },

            async register(email, password, name){
                set({ isLoading: true, error: null });
                try{
                    const res = await registerApi({ email, password, name });
                    set({
                        user: res.user,
                        token: res.token,
                        isLoading: false,
                    })
                }catch (e: unknown) {
                    if (e instanceof Error) {
                        set({ error: e.message });
                    } else {
                        set({ error: "Unknown error" });
                    }
                }
            },
            async getMe(){
                const token = get().token;
                if (!token) return;

                set({ isLoading: true, error: null });
                try{
                    const user = await getMeApi(token);
                    set({ user, isLoading: false });
                }catch (e: unknown) {
                    if (e instanceof Error) {
                        set({ error: e.message });
                    } else {
                        set({ error: "Unknown error" });
                    }
                }
            },
            async logout(){
                set({ user: null, token: null });
            }
        }),
        { name: "auth-storage"}
    )
)