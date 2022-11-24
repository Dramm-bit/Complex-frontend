import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import { sendSignInData } from "../../services";
import styles from './form-sign-in-styles.module.css';
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"

export default function SignIn() {
    const [formData, setFormData] = useState({
        username:"",
        password:""
    })
    const navigate = useNavigate()
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
            localStorage.setItem('token', response.data.token)
            navigate('/residences')
        } catch (error) {
            if(error.response.status === 401) {
                toast.error("Usuario o contraseña inválida")    
            }
            else if (error.response.status === 400) {
                toast.error("El correo ya se encuentra registrado")
            }
            else {
                toast.error("Ha habido un error al conectarse con el servidor")
            }
            console.error(error)
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
