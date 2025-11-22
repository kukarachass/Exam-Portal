// import styles from "./RegisterPage.module.css"
// import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import {useAuthStore} from "../../../store/authStore/authStore.ts";
//
// export default function RegisterPage(){
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//
//     const [password, setPassword] = useState("");
//     const register = useAuthStore((state) => state.register)
//
//     const navigate = useNavigate();
//
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         await register(email, password, name);
//     }
//
//     return (
//         <div className={styles.container}>
//             <form action="">
//                 <label htmlFor="username">Name:</label>
//                 <input
//                     name="username"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     name="password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     name="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </form>
//         </div>
//     )
// }