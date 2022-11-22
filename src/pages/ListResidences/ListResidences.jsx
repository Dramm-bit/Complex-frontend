import React, { useEffect, useState, useCallback } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { getResidences, deleteResidence } from "../../services"
import { toast } from 'react-toastify';
import logo from '../../resources/logo.jpg';
import styles from './list-residences-styles.module.css';

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

    return (
        <>
            <Header redirectText='Crear conjunto' redirectPath={'/residences/create'} flag={false} />

            {
                residences.map(residence => (
                    <div>

                         <section className={styles['container-card']}>

                            <div className={styles['content-card']}>
                                <img alt="main_logo" src={logo} className={styles['img']}></img>
                                <div className={styles['text']}>
                                    <div className={styles['title']}>hola que hace</div>
                                    <div className={styles["subtitle"]}>x2</div>
                                </div>
                                <div className={styles['group-button']}>
                                    <div>|erase</div>
                                    <div className={styles['blue']}>edit</div>
                                </div>

                            </div>

                        </section>
                        <h1>{residence.name}</h1>
                        <button onClick={() => removeResidence(residence.id)}>Eliminar</button>
                    </div>
                ))
            }
            <Footer />
            

        </>
    )

}

export default ListResidences
///api/v1/residences/{residence_id}/house/{id}
