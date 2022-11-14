import {Routes, Route} from 'react-router-dom';
import { NuevoConjunto } from '../pages/nuevoConjunto/NuevoConjunto';
import { NuevaCasa } from '../pages/nuevaCasa/NuevaCasa';
import { Conjuntos } from '../pages/conjuntos/Conjuntos';
import { Casas } from '../pages/casas/Casas';

export function MyRoutes(){
  return (
      <Routes>
        <Route path='/conjuntos/nuevoConjunto' element={<NuevoConjunto />} />
        <Route path='/conjuntos/:conjuntoId/casas/nuevaCasa' element={<NuevaCasa />} />
        <Route path='/conjuntos' element={<Conjuntos />} />
        <Route path='/conjuntos/:conjuntoId/casas' element={<Casas />} />
      </Routes>
  )
}