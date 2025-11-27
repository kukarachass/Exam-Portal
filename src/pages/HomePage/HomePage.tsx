import styles from "./HomePage.module.css"
import StudentCard from "../../UI/student-card/studentCard.tsx";


export default function HomePage(){
    return(
        <div className={styles.container}>
            <StudentCard/>
        </div>
    )
}