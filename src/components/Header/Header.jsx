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
        localStorage.removeItem('token')
        navigate('/sign-in')
    }
    const goToAnotherPage = () => {
        navigate(props.redirectPath)
    }
    const goToHome = () =>{
        navigate('/residences')

    }





    
    return (

        <section className={styles['contaienr-header']}>
            <header className={styles['header']}>
                <div className={'group-logo-style'}>
                    <img alt="main_logo" src={logo} onClick={goToHome} className={'header-img logo--standard'}></img>
                    <div className={'title-logo'}>ConSM</div>
                <div >
                {props.redirectText && <button className={styles["button"]} onClick={goToAnotherPage}>{props.redirectText}</button>}
                </div>
                    
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