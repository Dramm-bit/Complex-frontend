import React from "react";
import logo from '../../resources/logo.jpg';
import styles from "./styles.module.css"

export default function Header(props) {
    return (

        <section className={styles['header']}>
            <header className={styles['header__header']}>
                <div className={'header__group-logo group-logo-style--standard'}>
                    <img alt="main_logo" src={logo} className={'header__img logo--standard'}></img>
                    <div className={'header__title company--standard'}>ConSM</div>
                </div>
                <div className={styles['header__botton-header']}>
                    {props.flag ?
                    <>
                        <button className={'header__button button--style2'}> Log in</button>
                        <button className={"header__button button--standard"}>Register</button>
                    </>
                    : 
                    <button className={"header__button button--standard"}>Log out</button>
                    }
                    
                    
                  
                </div>
            </header>
        </section>

    );
}