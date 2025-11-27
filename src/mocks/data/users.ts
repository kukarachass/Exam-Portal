import type {IUser} from "../../interfaces/IUser.ts";

export let users: IUser[] = [
    {
        id: 1,
        email: "student@gmail.com",
        password: "123",
        role: "student",
        name: "Test student",
    },
    {
        id: 2,
        email: "lecturer@gmail.com",
        password: "123",
        role: "lecturer",
        name: "Test lecturer",
    },
    {
        id: 3,
        email: "admin@gmail.com",
        password: "123",
        role: "admin",
        name: "Test admin",
    },
    {
        id: 999,
        email: "maksimvozniy18@gmail.com",
        password: "123",
        role: "admin",
        name: "Maksim",
    },
]