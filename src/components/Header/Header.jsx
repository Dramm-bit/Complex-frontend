import React from "react";
import logo from '../../resources/logo.jpg';
import styles from "./styles.module.css"

export default function Header() {
    return (

        <section className={styles['header']}>
            <header className={styles['header__header']}>
                <div className={styles['header__group-logo group-logo-style--standard']}>
                    <img alt="main_logo" src={logo} className={styles['header__img logo--standard']}></img>
                    <div className={styles['header__title company--standard']}>ConSM</div>
                </div>
                <div className={styles['header__botton-header']}>
                    <button className={styles['header__button button--style2']}>Log in</button>
                    <button className={styles['header__button button--standard']}>Register</button>
                </div>
            </header>
        </section>

    );
}