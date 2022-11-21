import React from "react";
import logo from '../../resources/logo.jpg';
import styles from "./footer-styles.module.css"


export default function Footer() {
    return (

        <section className={styles["container-footer"]}>
            <footer className={styles["content-footer"]}>
                <div className={"group-logo-style"}>
                    <img alt="standart-logo" src={logo} className={"footer-img logo--standard"}></img>
                    <div className={"title-logo"}>ConSM</div>
                </div>
                <div className={styles["footer__copyright"]}>©web 2022</div>
            </footer>
        </section>
    );
}