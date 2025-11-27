import styles from "./studentCard.module.css"
import LoginForm from "../../components/AuthForms/LoginForm/LoginForm.tsx";

export default function StudentCard() {
    return (
        <div className={styles.studentWrapper}>
            <div className={styles.student}>
                <div className={styles.iconWrapper}>
                    <img src="/icons/student-icon.svg" alt=""/>
                </div>
                <div className={styles.content}>
                    <div className={styles.studentContent}>
                        <h3 className={styles.title}>Exam Portal</h3>
                        <span className={styles.mutedText}>Access your examinations, generate secure QR codes, and receive real-time authorization confirmations.</span>
                    </div>
                </div>
                <div className={styles.form}>
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}