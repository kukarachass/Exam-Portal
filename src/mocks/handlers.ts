import {http, HttpResponse} from "msw";
import {users} from "./data/users.ts";
import type { ILoginRequest, IRegisterRequest } from "../interfaces/IAuth.ts";
import type {IUser} from "../interfaces/IUser.ts";

export const handlers = [
    http.post("/auth/login", async ({ request}) => {
        const { email, password } = await request.json() as ILoginRequest;
        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            return HttpResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            )
        }

        return HttpResponse.json({
            token: "mock-token-" + user.role,
            user
        })
    }),

    http.post("/auth/register", async ({ request }) => {
        const { email, password, name } = await request.json() as IRegisterRequest;
        const exists = users.find(u => u.email === email);

        if (exists) {
            return HttpResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        const newUser: IUser = {
            id: Date.now(),
            email,
            password,
            role: "student",
            name
        };

        users.push(newUser);

        return HttpResponse.json({
            token: "mock-token-student",
            user: newUser
        })
    }),

    http.get("/auth/me", ({ request }) => {
        const token = request.headers.get("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return HttpResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const role = token.replace("mock-token-", "");
        const user = users.find(u => u.role === role);

        if (!user) {
            return HttpResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return HttpResponse.json(user);
    }),



]