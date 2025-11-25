import styles from "./Header.module.css"

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.leftSide}>
                <div className={styles.logoWrapper}>
                    <img className={styles.logo} src="/icons/logo.svg" alt=""/>
                </div>
                <div className={styles.nameWrapper}>
                    <h2 className={styles.title}>Richfield Graduate Institute</h2>
                    <span className={styles.name}>Exam Authorization System</span>
                </div>
            </div>

            <div className={styles.headerYear}>
                <span className={styles.acadYear}>Academic Year 2025-2026</span>
            </div>
        </div>
    )
}