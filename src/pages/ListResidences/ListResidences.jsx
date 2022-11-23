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
    const retrieveResidences = useCallback(async () => {
        try {
            const response = await getResidences()
            setResidences(response.data)
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
        } catch (error) {
            toast("Ha habido un error al eliminar la residencia", {
                hideProgressBar: true,
                autoClose: 3000,
                position: 'bottom-right'

            })
        }
    }
    const navigate = useNavigate()
    const goToHouseDetails = () => {
        navigate('/residences/:residenceId/houses')

    }

    const goToEditResidence = () => {
        navigate('/:residenceId/edit')
    }

    return (
        <>
            <Header redirectText='Crear conjunto' redirectPath={'/residences/create'} flag={false} />

            {
                residences.map(residence => (
                    <div>



                        <section className={styles['container-card']}>

                            <div className={styles['content-card']} >
                                <div onClick={goToHouseDetails}>
                                    <img alt="main_logo" src={thumbnail} className={styles['img']}></img>
                                    <div className={styles['text']}>
                                        <div className={styles['title']}>{retrieveResidences.name}</div>
                                        <div className={styles["subtitle"]}>x2</div>
                                    </div>
                                </div>
                                <div className={styles["options"]}>
                                    <div className={styles["title-option"]}>Opciones</div>
                                    <div className={styles["shadow"]}>
                                        <span className={styles['text2']} >|delete</span>
                                        <span className={styles['text1']} onClick={goToEditResidence}>edit</span>
                                    </div>
                                </div>

                            </div>

                        </section>
                    </div>
                ))
            }

            {/* <section className={styles['container-card']}>

                <div className={styles['content-card']} >
                      <div onClick={goToHouseDetails}>
                        <img alt="main_logo" src={thumbnail} className={styles['img']}></img>
                        <div className={styles['text']}>
                            <div className={styles['title']}>hola que hace</div>
                            <div className={styles["subtitle"]}>x2</div>
                        </div>
                      </div>
                    <div className={styles["options"]}>
                        <div className={styles["title-option"]}>Opciones</div>
                        <div className={styles["shadow"]}>
                            <span className={styles['text2']} >|delete</span>
                            <span className={styles['text1']} onClick={goToEditResidence}>edit</span>
                        </div>
                    </div>

                </div>

            </section> */}
            <Footer />


        </>
    )

}

export default ListResidences
///api/v1/residences/{residence_id}/house/{id}
