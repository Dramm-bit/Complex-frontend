import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './form-create-residence-styles.module.css';
import {createResidence} from "../../services"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
export default function CreateResidence(){
    const [residence, setResidence] = useState({
        name:"",
        address:"",
        paymentConfig:""
    })
    const navigate = useNavigate()

    const updateData = (event) => { 
        const name = event.target.name
        const value = event.target.value
       
        setResidence({
            ...residence,
            [name]:value
        })
    }

 

    const sendResidenceData = async (event) => {
        event.preventDefault()
        try {
            await createResidence(residence)
            toast.done("Conjunto creado", {
                hideProgressBar:true,
                autoClose:3000,
                position:'bottom-right'
            })
            navigate('/residences')
        } catch (error) {
            toast.error("Ha habido un error al crear el conjunto", {
                hideProgressBar:true,
                autoClose:3000,
                position:'bottom-right'
            })
        }
    }
    
    return (

        
        <>
            <Header flag={false} redirectPath={"/residences"} redirectText={"Volver a la lista de conjuntos"}/>

            <section className={"container--form"}>
            <form onSubmit={sendResidenceData} className={styles['content_form']}>
                <div className={styles["form-title"]}>Nombre del conjunto</div>
                <input onChange={updateData} type="text" className={styles["form"]} name="name" placeholder="Nombre"/>
                <input onChange={updateData} type="text" className={styles["form"]} name="address" placeholder="Dirección"/>
                <input onChange={updateData} type="text" className={styles["form"]} name="amount" placeholder="Cuota de pago"/>
                <button type="submit" className={"button--blue"}>create</button>
               
                
            </form>
            </section>

            <Footer/>
        </>

        


    );
}