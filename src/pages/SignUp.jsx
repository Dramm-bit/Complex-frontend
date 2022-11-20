import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../components/FormRegister/formR-style.module.css";
import { useState } from "react";


export default function SignUp() {
    const [formData,setFormData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""

    })

    const registerData = (event) => {
     

        const name = event.target.name
        const value = event.target.value
        
        {console.log(value)}

        setFormData({
            ...formData,
            [name]:value

        })

    }

    return (
        <>
            <Header flag={true} />


            <section className={"container--form"}>
                <form className={styles["content-form"]}>
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