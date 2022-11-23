import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import { sendSignInData } from "../../services";
import styles from './form-sign-in-styles.module.css';
import { toast } from 'react-toastify';

export default function SignIn() {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    
    const updateData = (event) => { 
        const name = event.target.name
        const value = event.target.value
       {console.log(value)}
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
            toast.error("Ha habido un error al conectarse con el servidor")
        }
    }
    
    return (
<>
        <Header flag = {true}/>

        <section className={"container--form"}>
            <form onSubmit={sendData} className={styles['content_form']}>
                <div className={styles["form-title"]}>Sign in</div>
                <input onChange={updateData} type="email"  id={styles["form"]} name="username" placeholder="Email"/>
                <input onChange={updateData} type="password" id={styles["form"]} name="password" placeholder="Password"/>
                <button type="submit" className={"button--blue"}>Login</button>
            </form>
            
        </section>

        <Footer/>
    </>
    );

}
