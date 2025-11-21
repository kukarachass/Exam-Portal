import {Outlet} from "react-router-dom";
import styles from "./LecturerLayout.module.css"

export default function LecturerLayout() {
    return(
        <div className={styles.content}>
            <Outlet/>
        </div>
    );
}