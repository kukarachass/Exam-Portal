import styles from "./ActivityBord.module.css"
import cn from "classnames"

export default function ActivityBord() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={cn(styles.iconWrapper, styles.lightGreen)}>
                    <img src="/icons/activity-icons/activity.svg" alt=""/>
                </div>
                <div className={styles.cardContent}>
                    <span className={cn(styles.primaryColor, styles.primary)}>3</span>
                    <span className={styles.mutedText}>Active Sessions</span>
                </div>
            </div>

            <div className={styles.card}>
                <div className={cn(styles.iconWrapper, styles.lightBlue)}>
                    <img src="/icons/activity-icons/users.svg" alt=""/>
                </div>
                <div className={styles.cardContent}>
                    <span className={cn(styles.primaryColor, styles.primaryBlue)}>89</span>
                    <span className={styles.mutedText}>Students Online</span>
                </div>
            </div>

            <div className={styles.card}>
                <div className={cn(styles.iconWrapper, styles.lightPurple)}>
                    <img src="/icons/lecturer-icon.svg" alt=""/>
                </div>
                <div className={styles.cardContent}>
                    <span className={cn(styles.primaryColor, styles.primaryPurple)}>7</span>
                    <span className={styles.mutedText}>Lecturers Active</span>
                </div>
            </div>

            <div className={styles.card}>
                <div className={cn(styles.iconWrapper, styles.lightOrange)}>
                    <img src="/icons/activity-icons/warning.svg" alt=""/>
                </div>
                <div className={styles.cardContent}>
                    <span className={cn(styles.primaryColor, styles.primaryOrange)}>2</span>
                    <span className={styles.mutedText}>Security Alerts</span>
                </div>
            </div>
        </div>
    )
}