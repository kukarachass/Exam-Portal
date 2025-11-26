import styles from "./AdminCard.module.css"

export default function AdminCard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.admin}>
                <div className={styles.iconWrapper}>
                    <img src="/icons/admin-icon.svg" alt=""/>
                </div>
                <div className={styles.adminContent}>
                    <h3 className={styles.title}>Administrative Control</h3>
                    <span className={styles.mutedText}>System oversight, comprehensive reporting, audit trails, and security monitoring capabilities.</span>
                </div>
                <div>
                    <span className={styles.access}>Full Access</span>
                </div>
            </div>
        </div>
    )
}
