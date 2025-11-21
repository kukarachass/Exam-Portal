export interface IUser {
    id: number,
    email: string,
    password: string,
    role: "student" | "lecturer" | "admin";
    name: string
}