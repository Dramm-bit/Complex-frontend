import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React, { useState } from "react";
import { sendSignInData } from "../services";
import styles from '../components/FormSignIn/formLog-styles.module.css';


export default function SignIn() {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    
    const updateData = (event) => { 
        const name = event.target.name
        const value = event.target.value
       
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const sendData = async (event) => {
        event.preventDefault()
        try {
            const response = await sendSignInData(formData)
            console.log(response)
        } catch (error) {
            console.error(error)
            alert("Ha habido un error")
        }
    }
    
    return (
<>
        <Header flag = {true}/>

        <section className={"container--form"}>
            <form onSubmit={sendData} className={styles['content_form']}>
                <div className={styles["form-title"]}>Sign in</div>
                <input onChange={updateData} type="email"  id={styles["form"]} name="email" placeholder="Email"/>
                <input onChange={updateData} type="password" id={styles["form"]} name="password" placeholder="Password"/>
                <button type="submit" className={"button--blue"}>Login</button>
            </form>
            
        </section>

        <Footer/>
    </>
    );

}
