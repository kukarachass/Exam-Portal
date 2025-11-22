import styles from "./HomePage.module.css"
import {Link} from "react-router-dom";

export default function HomePage(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to={"/login"}>
                    <div className={styles.student}>
                        Student Portal
                    </div>
                </Link>
                <Link to={"/login"}>
                    <div className={styles.lecturer}>
                        Lecturer Dashboard
                    </div>
                </Link>

                <Link to={"/login"}>
                    <div className={styles.admin}>
                        Admin Dashboard
                    </div>
                </Link>
            </div>
        </div>
    )
}