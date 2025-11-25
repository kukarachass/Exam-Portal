import styles from "./HomePage.module.css"
import {Link} from "react-router-dom";
import StudentCard from "../../UI/student-card/studentCard.tsx";
import LecturerCard from "../../UI/lecturer-card/lecturerCard.tsx";
import AdminCard from "../../UI/admin-card/AdminCard.tsx";

export default function HomePage(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to={"/auth/login"}>
                    <StudentCard/>
                </Link>

                <Link to={"/auth/login"}>
                    <div className={styles.lecturer}>
                        <LecturerCard/>
                    </div>
                </Link>

                <Link to={"/auth/login"}>
                    <div className={styles.admin}>
                        <AdminCard/>
                    </div>
                </Link>
            </div>
        </div>
    )
}