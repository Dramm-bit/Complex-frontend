import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from '../components/FormCreateH/formCreateH-styles.module.css';

export default function CreateComplex(){
    const [formData, setFormData] = useState({
        floor:""
     
    })

    
    const updateData = (event) => { 
        const name = event.target.name
        const value = event.target.value
       
        setFormData({
            ...formData,
            [name]:value
        })
    }
    
    
    return (

        
        <>
            <Header/>

            <section className={"container--form"}>
            <form className={styles['content_form']}>
                <div className={styles["form-title"]}>Nombre del conjunto</div>
                <input onChange={updateData} type="text"  id={styles["form"]} name="floor" placeholder="En que piso se encuentra"/>
                <div id={styles['space']}>
                <button type="submit" className={"button--blue"}>create</button>
                <button className={"button--white"}>cancel</button>
                </div>
            </form>
            </section>

            <Footer/>
        </>

        


    );
}