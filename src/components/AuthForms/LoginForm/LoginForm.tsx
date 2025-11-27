import styles from "./LoginForm.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useAuthStore} from "../../../store/authStore/authStore.ts";
import {useState} from "react";
import React from "react";

export default function LoginForm() {
    const login = useAuthStore((state) => state.login)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await login(email, password);

        const user = useAuthStore.getState().user;
        if (!user) {
            console.log("User not found");
        }

        if(!result.success) {
            console.log("Login Fail");
            setIsSuccess(false)
            return;
        }

        if (user) {
            if (user.role === "admin") navigate("/admin-panel");
            if (user.role === "student") navigate("/student-portal");
            if (user.role === "lecturer") navigate("/lecturer-dashboard");
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} action="" onSubmit={handleSubmit}>
                {!isSuccess &&  (
                    <div className={styles.errorMessage}>
                        Invalid email or password
                    </div>
                )}


                <div className={styles.inputsWrapper}>
                    <div className={styles.passInputWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className={styles.icon}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21.75 8.25v7.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-7.5m19.5 0A2.25 2.25 0 0019.5 6H4.5A2.25 2.25 0 002.25 8.25m19.5 0l-9.75 6.75L2.25 8.25" />
                        </svg>
                        <input
                            className={styles.passInput}
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.passInputWrapper}>
                        <svg stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             className={styles.icon}>
                            <path
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                        <input
                            className={styles.passInput}
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className={styles.btn}
                >
                    Login
                </button>

                <div className={styles.support}>
                    <span className={styles.muted}>Having trouble logging into your account?</span>
                    <Link className={styles.contactLink} to="/login">Support</Link>
                </div>
            </form>
        </div>
    )
}