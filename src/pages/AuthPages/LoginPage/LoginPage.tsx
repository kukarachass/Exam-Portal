import styles from "./LoginPage.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../../store/authStore/authStore.ts";
import {useState} from "react";
import React from "react";

export default function LoginPage() {
    const login = useAuthStore((state) => state.login)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);

        const user = useAuthStore.getState().user;
        if(!user){
            console.log("Login Fail");
        }

        if(user){
            if(user.role === "admin") navigate("/admin-panel");
            if(user.role === "student") navigate("/student-portal");
            if(user.role === "lecturer") navigate("/lecturer-dashboard");
        }
    }


    return (
        <div className={styles.container}>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <span>Don't have an account? <Link to={"/auth/registration"}>Register here</Link></span>

                <button
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
}