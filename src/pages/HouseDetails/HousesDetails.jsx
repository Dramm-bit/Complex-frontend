import React, { useState, useCallback, useEffect } from 'react'
import { getHouses, deleteHouse } from "../../services"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify"


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import styles from "./houses-details-styles.module.css"

const HousesDetails = () => {
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
            toast("Ha habido un error al eliminar la casa", {
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

                    </>
                ))
            }
            {/* <div className="card p-fluid">
                <h5>Row Editing</h5>
                <DataTable editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete1} responsiveLayout="scroll"> */}
                    {/* <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div> */}

            <Footer />
        </>
    )
}

export default HousesDetails