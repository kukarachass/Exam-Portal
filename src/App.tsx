import styles from './App.module.css'
import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header.tsx";

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
                footer
            </footer>
        </div>
    )
}

export default App
