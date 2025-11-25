import styles from "./studentCard.module.css"

export default function StudentCard() {
    return (
        <div className={styles.studentWrapper}>
            <div className={styles.student}>
                <div className={styles.iconWrapper}>
                    <img src="/icons/student-icon.svg" alt=""/>
                </div>
                <div className={styles.studentContent}>
                    <h3 className={styles.title}>Student Portal</h3>
                    <span className={styles.mutedText}>Access your examinations, generate secure QR codes, and receive real-time authorization confirmations.</span>
                </div>
                <div>
                    <span className={styles.access}>Secure Access</span>
                </div>
            </div>
        </div>
    )
}