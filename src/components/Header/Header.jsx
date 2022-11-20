import React from "react";
import logo from '../../resources/logo.jpg';
import styles from "./header-styles.module.css"

export default function Header(props) {
    return (

        <section className={styles['contaienr-header']}>
            <header className={styles['header']}>
                <div className={'group-logo-style'}>
                    <img alt="main_logo" src={logo} className={'header-img logo--standard'}></img>
                    <div className={'title-logo'}>ConSM</div>
                </div>
                <div className={styles['group-button']}>
                    {props.flag ?
                    <>
                        <button className={'size-button button--white'}> Log in</button>
                        <button className={"size-button button--blue"}>Register</button>
                    </>
                    : 
                    <button className={"size-button button--blue"}>Log out</button>
                    }
                    
                    
                  
                </div>
            </header>
        </section>

    );
}