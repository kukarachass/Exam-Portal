import styles from "./AdminPage.module.css"
import AdminHeader from "../../../UI/Admin-Page-Ui/AdminHeader/AdminHeader.tsx";

export default function AdminPage(){
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <AdminHeader/>
            </header>

            <div className={styles.hero}>

            </div>

            <div className={styles.examSessions}>

            </div>

            <div className={styles.management}>

            </div>

            <div className={styles.logs}>

            </div>
        </div>
    )
}