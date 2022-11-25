import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './form-create-house-styles.module.css';
import { useParams } from 'react-router-dom'
import {createHouse, getHouseById, getHouses, updateHouse} from "../../services"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"


export default function CreateHouse(){
    const [house, setHouse] = useState({
        tower:""
    })
    const navigate = useNavigate()
    const { residenceId } = useParams();
    const {houseId} = useParams();

    const updateData = (event) => { 
        const tower = event.target.name
        const value = event.target.value
      
        setHouse({
            ...house,
            tower:value
        });
    }
    
    useEffect(()=>{
        const bringHouses = async ()=>{
            const {data} = await getHouseById(residenceId,houseId);
            setHouse(data)
            // console.log("aqui",data)
            
        }
        
        if(houseId){
           bringHouses(houseId)
        //    console.log(house)
        }

    },[])


    
    const sendHouseData = async (event) => {
        event.preventDefault()
        
        try {
            if(houseId){
                const {data} =await updateHouse(residenceId, houseId, house)
                setHouse(data)
                navigate(`/residences/${residenceId}/houses`)
            }else{
            
                await createHouse(residenceId,house)
                toast.done("Casa creada")
                navigate(`/residences/${residenceId}/houses`)
            }

        } catch (error) {
         
            toast.error("Ha habido un error al actualizar la casa")
        }
    }
   
    return (

        
        <>
            <Header redirectText={"Volver a la lista de casas"} redirectPath={`/residences/${residenceId}/houses`}  flag={false} />

            <section className={"container--form"}>
            <form onSubmit={sendHouseData} className={styles['content_form']}>
                <div className={styles["form-title"]}></div>
                <input onChange={updateData} type="text" id={styles["form"]} name="name" placeholder={'Nombre del propietario '}/>
                <button type="submit" className={"button--blue"}>actualizar</button>
                
            </form>
            </section>

            <Footer/>
        </>

        


    );
}