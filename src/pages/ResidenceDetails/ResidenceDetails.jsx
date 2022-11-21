import React, {useState,useCallback,useEffect} from 'react'
import  {getHouses,deleteHouse}  from "../../services"
import { useNavigate,useParams } from 'react-router-dom'
import {toast} from "react-toastify"
import Header  from "../../components/Header/Header"
const ResidenceDetails = () => {
    const [houses, setHouses] = useState([])
    const navigate = useNavigate()
    const { residenceId } = useParams();

    const retrieveHouses = useCallback(async ()=> {
        try {
            const response = await getHouses(residenceId)
            setHouses(response.data)
        } catch (error) {
            console.error(error)
            toast("Ha habido un error al obtener las casas", {
                hideProgressBar:true,
                autoClose:3000,
                position:'bottom-right'
            })
        }
    },[residenceId])

    useEffect(() => {
        retrieveHouses()
    }, [retrieveHouses]);

    const removeHouse = async (id) => {
        try {
            // se debe validar rol
            await deleteHouse(id)
        } catch (error) {
            toast("Ha habido un error al eliminar la residencia", {
                hideProgressBar:true,
                autoClose:3000,
                position:'bottom-right'
               
            })
        }
    }

    const goToEditHouse = (id) => navigate('/residences/house/edit/'+id)
    return (
        <>
            <Header redirectText='Crear casa' redirectPath={`/residences/${residenceId}/houses/create`} flag={false}/>
            
            {
                houses.map(house => (
                    <div>
                        <span>{house.id}</span>  
                        <span>{house.name}</span>
                        <button onClick={()=>goToEditHouse(house.id)}>Editar</button>
                        <button onClick={()=>removeHouse(house.id)}>Eliminar</button>
                    </div>
                ))
            }
        </>
    )
}

export default ResidenceDetails