import React from "react";
import BasicTable from "../../components/table/BasicTable";
import { Header } from "../../components/header/Header";
import { fakeConjuntos } from "../../utils/fakedata/fakeConjuntos";
import { useLocation } from "react-router-dom";
import './casas.css'

export function Casas(){
  const location = useLocation();
  const id = location.pathname.substring(11, 12);
  const conjunto = fakeConjuntos.filter(conjunto =>parseInt(conjunto.id) === parseInt(id));
  const casas = conjunto.fakeCasas;
  console.log('data-> ' + conjunto)
  console.log('casas-> ' + casas)
  return (
    <div className='casas'>
      <Header ruta='/conjuntos/:conjuntosId/casas/nuevaCasa' title='Crear una nueva casa' />
      <h1 className='casas__title'>Informacion del conjunto</h1>
      <div className='table--container'>
        <BasicTable />
      </div>
    </div>
  )
}