import React from "react";
import logo from '../resources/logo.jpg';
import styles from "./styles.module.css"


export default function Footer() {
    return (

        <section className="container-footer">
            <footer className="container-footer__footer">
                <div className="container-footer__group-logo group-logo-style--standard">
                    <img src={logo} className="container-footer__img logo--standard"></img>
                    <div className="container-footer__title company--standard">ConSM</div>
                </div>
                <div className="container-footer__copyright">©web 2022</div>
            </footer>
        </section>
    );
}