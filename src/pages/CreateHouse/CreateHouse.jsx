import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './form-create-house-styles.module.css';
import { useParams } from 'react-router-dom'
import {createHouse} from "../../services"
import {toast} from "react-toastify"
export default function CreateHouse(){
    const [house, setHouse] = useState({
        name:""
    })
    
    const { residenceId } = useParams();
    const updateData = (event) => { 
        const name = event.target.name
        const value = event.target.value
       
        setHouse({
            ...house,
            [name]:value
        })
    }
    
    const sendHouseData = async (event) => {
        event.preventDefault()
        try {
            await createHouse(house)
        } catch (error) {
            console.error(error)
            toast.error("Ha habido un error al crear la casa")
        }
    }
   
    return (

        
        <>
            <Header redirectText={"Volver a la lista de casas"} redirectPath={`/residences/${residenceId}/houses`}  flag={false} />

            <section className={"container--form"}>
            <form onSubmit={sendHouseData} className={styles['content_form']}>
                <div className={styles["form-title"]}>Crear Nueva Casa :D</div>
                <input onChange={updateData} type="text" id={styles["form"]} name="name" placeholder="Nombre de la casa"/>
                <button type="submit" className={"button--blue"}>create</button>
                
            </form>
            </section>

            <Footer/>
        </>

        


    );
}