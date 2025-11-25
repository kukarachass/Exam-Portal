import styles from "./lecturerCard.module.css"

export default function LecturerCard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.lecturer}>
                <div className={styles.iconWrapper}>
                    <img src="/icons/lecturer-icon.svg" alt=""/>
                </div>
                <div className={styles.lecturerContent}>
                    <h3 className={styles.title}>Lecturer Dashboard</h3>
                    <span className={styles.mutedText}>Manage examination sessions, scan student QR codes, and monitor real-time authorization status</span>
                </div>
                <div>
                    <span className={styles.access}>Management Tools</span>
                </div>
            </div>
        </div>
    )
}
