"use client";

import styles from "./Home.module.css";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
    return (
        <div>
            <Dashboard />
            <div className={styles.homeStyle}>
                <section className={styles.mainText}>
                    <div className={styles.mainTextContent}>
                        <div className={styles.labelStyle}>
                            <div className={styles.innerlabelStyle}>
                                <h2>
                                    CREATING
                                </h2>
                                <h1>
                                    custom
                                </h1>
                            </div>
                            <div className={styles.innerlabelStyle}>
                                <h1>
                                    digital
                                </h1>
                                <h2>
                                    SOLUTIONS
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={styles.innerPara}>
                    <p>
                    We are a cooperative of like minded professionals skilled at solving problems and creating excellent products for today's digital world.
                    </p>
                </div>
                <div className={styles.buttonDisplay}>
                    <div className={styles.talkButton}>
                        <button>Let's talk!</button>
                    </div>
                    <div className={styles.serviceButton}>
                        <button>Services</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
