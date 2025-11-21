import {Outlet} from "react-router-dom";
import styles from "./AdminLayout.module.css"

export default function AdminLayout(){
    return(
        <div className={styles.content}>
            <Outlet/>
        </div>
    );
}