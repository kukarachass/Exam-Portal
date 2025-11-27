import styles from "./ManageCards.module.css"
import {Link} from "react-router-dom";
import cn from "classnames";

export default function ManageCards (){
    return(
        <div className={styles.wrapper}>
            <Link to="manage-users">
                <div className={styles.manageCard}>
                    <div className={styles.leftSide}>
                        <div className={cn(styles.iconWrapper, styles.lightBlue)}>
                            <img src="/icons/manage-icons/usersMangement.svg" alt=""/>
                        </div>
                        <div className={styles.cardInfo}>
                            <span className={styles.bigText}>Manage Users</span>
                            <span className={styles.muted}>Students & Lectures</span>
                        </div>
                    </div>

                    <div className={styles.rightSide}>
                        <img src="/icons/open.svg" alt=""/>
                    </div>
                </div>
            </Link>

            <Link to="manage-exams">
                <div className={styles.manageCard}>
                    <div className={styles.leftSide}>
                        <div className={cn(styles.iconWrapper, styles.lightGreen)}>
                            <img src="/icons/exam-icons/exam.svg" alt=""/>
                        </div>
                        <div className={styles.cardInfo}>
                            <span className={styles.bigText}>Manage Exams</span>
                            <span className={styles.muted}>View & Control</span>
                        </div>
                    </div>

                    <div className={styles.rightSide}>
                        <img src="/icons/open.svg" alt=""/>
                    </div>
                </div>
            </Link>
        </div>
    )
}