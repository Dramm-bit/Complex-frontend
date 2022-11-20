import React from "react";
import '../../styles/Header1.css'
import logo from '../../resources/logo.jpg';
import '../../styles/Common.css';

export default function Header1() {
    return (

        <section className="header">
            <header className="header__header1">
                <div className="header__group-logo group-logo-style--standard">
                     <img src={logo} className="header__img logo--standard"></img>
                    <div className="header__title company--standard">ConSM</div>
                </div>
                <div className="header__botton-header1">
                    <button className="header__button button--style2" >Log in</button>
                    <button className="header__button button--standard">Register</button>
                </div>
            </header>
        </section>

    );
}