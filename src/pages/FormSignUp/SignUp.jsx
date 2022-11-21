import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./form-sign-up-style.module.css";
import { useState } from "react";
import { toast } from 'react-toastify';
import {sendSignUpData} from "../../services"


export default function SignUp() {
    const [formData,setFormData] = useState({
        email:"",
        password:""

    })

    const registerData = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormData({
            ...formData,
            [name]:value

        })

    }
    const sendRegisterData = async (event) => {
        event.preventDefault()

        try {
            //logica
            await sendSignUpData(formData)
        } catch (error) {
            toast.error("Ha habido un error al conectarse con el servidor")
        }
    }

    return (
        <>
            <Header flag={true} />


            <section className={"container--form"}>
                <form onSubmit={sendRegisterData} className={styles["content-form"]}>
                    <div className={styles["container-form__title"]}>Sign up for a new account</div>

                <input onChange ={registerData} type="email" id={styles["size"]} name="email" placeholder="Email"></input>
                <input onChange ={registerData} type="password" id={styles["size"]} name="password" placeholder="Password"></input>
                <div id={styles['space']}>
                <button type="submit" className={"button--blue"}>create</button>
                <button className={"button--white"}>cancel</button>
                </div>
                </form>
                
            </section>

            <Footer />

        </>
    );
}