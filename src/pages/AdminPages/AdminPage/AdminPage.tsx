import styles from "./AdminPage.module.css"
import AdminHeader from "../../../UI/Admin-Page-Ui/AdminHeader/AdminHeader.tsx";
import ActivityBord from "../../../UI/Admin-Page-Ui/Activity-bord/ActivityBord.tsx";
import ExamSessions from "../../../UI/Admin-Page-Ui/ExamSessions/ExamSessions.tsx";
import ManageCards from "../../../UI/Admin-Page-Ui/ManageCards/ManageCards.tsx";
import SystemMonitoringBlock from "../../../UI/Admin-Page-Ui/SystemMonitoringBlock/SystemMonitoringBlock.tsx";

export default function AdminPage(){
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <AdminHeader/>
            </header>

            <div className={styles.hero}>
                <ActivityBord/>
            </div>

            <div className={styles.examSessions}>
                <ExamSessions/>
            </div>

            <div className={styles.management}>
                <ManageCards/>
                <SystemMonitoringBlock/>
            </div>

            <div className={styles.logs}>

            </div>
        </div>
    )
}