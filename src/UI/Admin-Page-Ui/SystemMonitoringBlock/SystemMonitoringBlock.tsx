import styles from "./SystemMonitoringBlock.module.css"
import {Link} from "react-router-dom";

export default function SystemMonitoringBlock(){
    return(
        <div className={styles.container}>
            <div className={styles.blocksWrapper}>
                <div className={styles.block}>
                    <div className={styles.titleWrapper}>
                        <h3 className={styles.title}>System Monitoring</h3>
                    </div>

                    <div className={styles.content}>
                        <Link to="view-systemLogs">
                            <div className={styles.element}>
                                <img className={styles.icon} src="/icons/System-monitoring-icons/view.svg" alt=""/>
                                <span>View System Logs</span>
                            </div>
                        </Link>

                        <Link to="monitoring">
                            <div className={styles.element}>
                                <img className={styles.icon} src="/icons/System-monitoring-icons/monitoring.svg" alt=""/>
                                <span>Real-Time Monitoring</span>
                            </div>
                        </Link>

                        <Link to="security-alerts">
                            <div className={styles.element}>
                                <img className={styles.icon} src="/icons/System-monitoring-icons/alerts.svg" alt=""/>
                                <span>Security Alerts</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={styles.block}>
                    <div className={styles.titleWrapper}>
                        <h3 className={styles.title}>Reports & Analytics</h3>
                    </div>

                    <div className={styles.content}>
                        <Link to="audit-reports">
                            <div className={styles.element}>
                                <img className={styles.icon} src="/icons/System-monitoring-icons/audit.svg" alt=""/>
                                <span>Audit Reports</span>
                            </div>
                        </Link>

                        <Link to="usage-analytics">
                            <div className={styles.element}>
                                <img className={styles.icon} src="/icons/System-monitoring-icons/analytics.svg" alt=""/>
                                <span>Usage Analytics</span>
                            </div>
                        </Link>

                        <Link to="manage-users">
                            <div className={styles.element}>
                                <img className={styles.icon} src="/icons/System-monitoring-icons/userMange.svg" alt=""/>
                                <span>User Management</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}