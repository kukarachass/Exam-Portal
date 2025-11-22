import styles from './App.module.css'
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
        <header>
            header
        </header>
        <Outlet/>
        <footer>
            footer
        </footer>
    </div>
  )
}

export default App
