import React, { useState, useCallback, useEffect } from 'react'
import { getHouses, deleteHouse } from "../../services"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify"


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import styles from "./residence-details-style.module.css"
const ResidenceDetails = () => {
    const [houses, setHouses] = useState([])
    const navigate = useNavigate()
    const { residenceId } = useParams();

    const retrieveHouses = useCallback(async () => {
        try {
            const response = await getHouses(residenceId)
            setHouses(response.data)
        } catch (error) {
            console.error(error)
            toast("Ha habido un error al obtener las casas", {
                hideProgressBar: true,
                autoClose: 3000,
                position: 'bottom-right'
            })
        }
    }, [residenceId])

    useEffect(() => {
        retrieveHouses()
    }, [retrieveHouses]);

    const removeHouse = async (id) => {
        try {
            // se debe validar rol
            await deleteHouse(id)
        } catch (error) {
            toast("Ha habido un error al eliminar la residencia", {
                hideProgressBar: true,
                autoClose: 3000,
                position: 'bottom-right'

            })
        }
    }


    const goToEditHouse = (id) => navigate('/residences/house/edit/' + id)
    return (
        <>
            <Header redirectText='Crear casa' redirectPath={`/residences/${residenceId}/houses/create`} flag={false} />


            {
                houses.map(house => (
                    <>
                        <div>
                            <span>{house.id}</span>
                            <span>{house.name}</span>
                            <button className={"button--blue"} onClick={() => goToEditHouse(house.id)}>Editar</button>
                            <button onClick={() => removeHouse(house.id)}>Eliminar</button>
                        </div>

                    </>
                ))
            }
            {/* <DataTable scrollable scrollHeight="400px">
                    <Column field="house.id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="house.name" header="Nombre del Conjunto" style={{ minWidth: '200px' }}></Column>
                    <Column field="representative.name" header="Opciones" style={{ minWidth: '200px' }}></Column>
                    
                </DataTable>  */}






            <div class={styles["container"]}>

                <DataTable>

                    <Column selectionMode="multiple" headerStyle={{ width: '2rem' }} exportable={false}></Column>
                    <Column field="code" header="Code" style={{ minWidth: '12rem' }}></Column>
                    <Column field="name" header="Name" style={{ minWidth: '16rem' }}></Column>
                    
                </DataTable>
                <div>

                    <div className={styles["options"]}>
                        <div className={styles["title-header"]}>Opciones</div>
                    </div > 
                       <div className={styles["shadow"]}>
                    <a href='' className={styles['text1']}>edit</a>
                    <a href='' className={styles['text2']}>|delete</a>
                </div>
                </div>
                

            </div>











            <Footer />
        </>
    )
}

export default ResidenceDetails