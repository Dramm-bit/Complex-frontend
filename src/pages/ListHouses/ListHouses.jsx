import React, { useEffect, useState, useCallback } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { getResidences, deleteResidence, getHouses, deleteHouse, updateHouse } from "../../services"
import { toast } from 'react-toastify';
import thumbnail from '../../resources/thumbnail.jpg';
import styles from './list-houses-style.module.css';
import { Router, useNavigate, useParams } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



const ListHouses = () => {
    const [houses, setHouses] = useState([])
    const navigate = useNavigate()
    const { residenceId } = useParams();

    const retrieveHouses = useCallback(async () => {
        try {
            const response = await getHouses(residenceId)
            console.log(response)

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
            await deleteHouse(id,residenceId)
            await retrieveHouses()
            toast("Casa eliminada", {
                hideProgressBar: true,
                autoClose: 3000,
                position: 'bottom-right'

            })
        } catch (error) {
            toast("Ha habido un error al eliminar la residencia", {
                hideProgressBar: true,
                autoClose: 3000,
                position: 'bottom-right'

            })
        }
    }

     const goToEditHouse = (id) => navigate(`/residences/${residenceId}/houses/` + id)

    return (
        <>
            <Header redirectText='Crear casa' redirectPath={`/residences/${residenceId}/houses/create`} flag={false} />




            <div className={'father'}>
                <div className={'title-logo'}>Lista de casas</div>
                <table border='3' className="table table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            houses.map(house => (
                                <tr key={house.id}>
                                    
                                    <th scope="row">{house.id}</th>
                                   
                                    <td>{house.tower}</td>
                                    <td>
                                        <div>
                                            <button onClick={() => goToEditHouse (house.id)}>Editar</button>
                                            <button onClick={() => removeHouse(house.id)}>Eliminar</button>
                                        </div>
                                    </td>
 
                                </tr>
                                
                            ))
                        }


                    </tbody>
                </table>
                
                    </div>
            <Footer />
        </>
    )
                    
}
export default ListHouses

