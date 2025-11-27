import styles from "./MainLayout.module.css"
import Header from "../../UI/Header/Header.tsx";
import Footer from "../../UI/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return(
        <div className={styles.wrapper}>
            <header>
                <Header/>
            </header>

            <main className={styles.main}>
                <Outlet/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}