import styles from "./AdminHeader.module.css"
import {useAuthStore} from "../../../store/authStore/authStore.ts";
import {Link} from "react-router-dom";


export default function AdminHeader() {
    const user = useAuthStore((state) => state.user);
    return (
        <div className={styles.header}>
            <div className={styles.leftSide}>
                <div className={styles.logoWrapper}>
                    <img className={styles.icon} src="/icons/admin-icon.svg" alt=""/>
                </div>
                <div className={styles.adminInfo}>
                    <h3 className={styles.title}>System Administrator</h3>
                    <span className={styles.mutedBig}>{user?.name}</span>
                    <span className={styles.mutedSmall}>{user?.email}</span>
                </div>
            </div>
            <Link to={"/"}>
                <div className={styles.logoutLink}>
                    Log out
                </div>
            </Link>
        </div>
    )
}