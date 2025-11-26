import styles from './App.module.css'
import {Outlet} from "react-router-dom";
import Header from "./UI/Header/Header.tsx";
import Footer from "./UI/Footer/Footer.tsx";

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <Header/>
            </header>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    )
}

export default App
