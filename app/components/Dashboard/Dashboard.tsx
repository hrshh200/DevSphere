import Image from "next/image";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.dashDisplay}>
            <img className={styles.logo} src="/logo.png" alt="logo" />
            <div className={styles.innerDisplay}>
                <button>About</button>
                <button>Services</button>
                <button>Projects</button>
                <button>Team</button>
                <button>Contact</button>
            </div>
            <div>
                <button className={styles.innerButton}>
                    Contact
                </button>
            </div>
        </div>
    );
}

export default Dashboard;