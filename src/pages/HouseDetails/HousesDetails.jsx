import React, { useState, useCallback, useEffect } from 'react'
import { getHouses, deleteHouse } from "../../services"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-toastify"


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';



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
    const columns = [
        { field: 'id', header: 'Id' },
        { field: 'name', header: 'Nombre del propietario' },
    ];

    const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
           
            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }
    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
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
            
            <div className="card p-fluid">
                <h5>Cell Editing</h5>
               
                <DataTable value={houses} editMode="cell" className="editable-cells-table" responsiveLayout="scroll">
                    {
                        columns.map(({ field, header }) => {
                            return <Column key={field} field={field} header={header} style={{ width: '25%' }}editor={(options) => textEditor(options)} onCellEditComplete={onCellEditComplete} />
                        })
                    }
                </DataTable>
                <div className={styles["options"]}>
                                <div className={styles["title-header"]}>Opciones</div>
                                <div className={styles["shadow"]}>
                                   
                                </div>
                            </div>
            </div>

            <Footer />
        </>
    )
}

export default HousesDetails