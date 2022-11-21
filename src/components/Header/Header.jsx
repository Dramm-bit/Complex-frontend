import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../resources/logo.jpg';
import styles from "./header-styles.module.css"

export default function Header(props) {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/sign-in')
    }
    const goToRegister = () => {
        navigate('/sign-up')
    }
    const closeSession = () => {
        //eliminar cookies de session 
        navigate('/')
    }
    const goToAnotherPage = () => {
        navigate(props.redirectPath)
    }
    return (

        <section className={styles['contaienr-header']}>
            <header className={styles['header']}>
                <div className={'group-logo-style'}>
                    <img alt="main_logo" src={logo} className={'header-img logo--standard'}></img>
                    <div className={'title-logo'}>ConSM</div>
                    {

                        props.redirectText && <button className={"create-buton button--blue"} onClick={goToAnotherPage}>{props.redirectText}</button>

                    }
                </div>
                <div className={styles['group-button']}>
                    {props.flag ?
                    <>
                        <button onClick={goToLogin} className={'size-button button--white'}> Log in</button>
                        <button onClick={goToRegister} className={"size-button button--blue"}>Register</button>
                    </>
                    : 
                    <button onClick={closeSession} className={"size-button button--blue"}>Log out</button>
                    }
                    
                </div>
            </header>
        </section>

    );
}