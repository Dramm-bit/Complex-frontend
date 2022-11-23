import React, { useEffect, useState, useCallback } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { getResidences, deleteResidence, getHouses, deleteHouse } from "../../services"
import { toast } from 'react-toastify';
import thumbnail from '../../resources/thumbnail.jpg';
import styles from './list-houses-styles.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



const ListHouses = () => {
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
                        {/* <div>
                            <span>{house.id}</span>
                            <span>{house.name}</span>
                            <button className={"button--blue"} onClick={() => goToEditHouse(house.id)}>Editar</button>
                            <button onClick={() => removeHouse(house.id)}>Eliminar</button>
                        </div> */}

                        <div class={styles["container"]}>

                            <DataTable value={house}>

                                <Column selectionMode="multiple" headerStyle={{ width: '2rem' }} exportable={false}></Column>
                                <Column field="code" header="Code" style={{ minWidth: '12rem' }}></Column>
                                <Column field="name" header="Name" style={{ minWidth: '16rem' }}></Column>

                            </DataTable>
                            <div className={styles["options"]}>
                                <div className={styles["title-header"]}>Opciones</div>
                                <div className={styles["shadow"]}>
                                    <span className={styles['text1']} onClick={goToEditHouse}>edit</span>
                                    <span className={styles['text2']} onClick={() => removeHouse(house.id)}>|delete</span>
                                </div>
                            </div>


                        </div>


                    </>
                ))
            }


            {/* <div class={styles["container"]}>

                <div class={styles["group"]}>
                    <div className={styles['title']}>Lista de casas del conjunto </div> como concadenar con el nombre del conjunto  */}

                    {/* <DataTable>

                        <Column selectionMode="multiple" headerStyle={{ width: '2rem' }} exportable={false}></Column>
                        <Column field="code" header="Code" style={{ minWidth: '12rem' }}></Column>
                        <Column field="name" header="Name" style={{ minWidth: '16rem' }}></Column>

                    </DataTable>
                </div>
                <div className={styles["options"]}>
                    <div className={styles["title-option"]}>Opciones</div>
                    <div className={styles["shadow"]}>
                        <span className={styles['text1']} onClick={goToEditHouse}>edit</span>
                        <span className={styles['text2']} >|delete</span>
                    </div>
                </div>


            </div> */}


            <Footer />
        </>
    )
}

export default ListHouses
///api/v1/residences/{residence_id}/house/{id}
