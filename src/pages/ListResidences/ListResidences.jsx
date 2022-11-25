import React, { useEffect, useState, useCallback } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { getResidences, deleteResidence } from "../../services"
import { toast } from 'react-toastify';
import thumbnail from '../../resources/thumbnail.jpg';
import styles from './list-residences-styles.module.css';
import { useNavigate } from "react-router-dom";



const ListResidences = () => {
    const [residences, setResidences] = useState([])

    
    const navigate = useNavigate()

    const retrieveResidences = useCallback(async () => {
        try {
            const response = await getResidences()
            setResidences(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
            toast("Ha habido un error al obtener las residencias", {
                hideProgressBar: true,
                autoClose: 3000,
                position: 'bottom-right'
            })
        }
    }, [])

    useEffect(() => {
        retrieveResidences()
    }, [retrieveResidences]);

    const removeResidence = async (id) => {
        try {
            // se debe validar rol
            await deleteResidence(id)
            await retrieveResidences()
            toast.done("Residencia eliminada correctamente",)
        } catch (error) {
            toast.error("Ha habido un error al eliminar la residencia", {
                hideProgressBar: true,
                autoClose: 3000,
                position: 'bottom-right'

            })
        }
    }
    const goToHouseDetails = (residenceId) => {
        navigate(`/residences/${residenceId}/houses`)
    }

    const goToEditResidence = (residenceId) => {
        navigate(`/residences/edit/${residenceId}`)
    }

    return (
        <>
            <Header redirectText='Crear conjunto' redirectPath={'/residences/create'} flag={false} />
            <section className={styles['container-card']}>
                {
                    residences.map(residence => (
                        <div key={residence.id}>

                            <div className={styles['content-card']} >
                                <div onClick={() => goToHouseDetails(residence.id)}>
                                    <img alt="main_logo" src={thumbnail} className={styles['img']}></img>
                                    <div className={styles['text']}>
                                        <div className={styles['title']}>{residence.name}</div>
                                        <div className={styles["subtitle"]}>{residence.address}</div>
                                    </div>
                                </div>
                                <div className={styles["options"]}>
                                    <div className={styles["title-option"]}></div>
                                    <div className={styles["shadow"]}>
                                        <span onClick={() => removeResidence(residence.id)} className={styles['text2']} >|delete</span>
                                        <span className={styles['text1']} onClick={() => goToEditResidence(residence.id)}>edit</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))
                }
            </section>

            <Footer />


        </>
    )

}

export default ListResidences
///api/v1/residences/{residence_id}/house/{id}
