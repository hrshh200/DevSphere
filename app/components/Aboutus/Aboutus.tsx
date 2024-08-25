
import React from "react";
import styles from "./Aboutus.module.css";


const AboutUs = () => {
    return (
        <div>
            <div className={styles.displayAboutus}>
                <h1>Get to Know us</h1>
                <p >We are a group of talented individuals from different delivery backgrounds. Through our collective experience working together, we have found that creating a cooperative yields greater value for our clients.
                    Our unique mix of skills allows us to have a wide offering including consultancy, design, architecture, development, operations, training, and support. We are not a digital agency, yet we deliver all the services that one would—without the overheads.</p>
            </div>
            <div className={styles.displayAboutus}>
            <h1>How can we help you?</h1>
                <div>
                </div>
            </div>
        </div>  
    );
}

export default AboutUs;