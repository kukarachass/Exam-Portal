import styles from "./HomePage.module.css"
import StudentCard from "../../UI/student-card/studentCard.tsx";


export default function HomePage(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <StudentCard/>

                {/*<Link to={"/auth/login"}>*/}
                {/*    <div className={styles.lecturer}>*/}
                {/*        <LecturerCard/>*/}
                {/*    </div>*/}
                {/*</Link>*/}

                {/*<Link to={"/auth/login"}>*/}
                {/*    <div className={styles.admin}>*/}
                {/*        <AdminCard/>*/}
                {/*    </div>*/}
                {/*</Link>*/}
            </div>
        </div>
    )
}