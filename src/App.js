
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./pages/FormSignUp/SignUp";
import SignIn from "./pages/FormSignIn/SignIn";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import ListResidences from "./pages/ListResidences/ListResidences";
import CreateHouse from "./pages/CreateHouse/CreateHouse"
import CreateResidence from "./pages/CreateResidence/CreateResidence"
import ListHouses from "./pages/ListHouses/ListHouses"
import Guardian from "./middlewares/Guardian"
import HouseEdit from "./pages/HouseEdit/HouseEdit";
import ResidencesEdit from "./pages/ResidenceEdit/ResidenceEdit";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in"/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/residences" element={<ListResidences/>}/>  {/* agregar guardian */}
           
            <Route path="/residences/create" element={<CreateResidence/>}/> {/* agregar guardian */}
            <Route path="/residences/edit/:residenceId" element={<CreateResidence/>}/>
            <Route path="/residences/:residenceId/houses/create" element={<CreateHouse/>}/>  {/* agregar guardian */}
            <Route path="/residences/:residenceId/houses" element={<ListHouses/>}/> {/* agregar guardian */}
            <Route path="/residences/:residenceId/houses/:houseId" element={<HouseEdit/>}/>  {/* agregar guardian */}
            <Route path="/residences/edit/:residenceId" element={<ResidencesEdit/>}/>  {/* agregar guardian */}
        </Routes>

      </BrowserRouter>
    
      <ToastContainer/>
    
     
    </>
    
  );
}


export default App;
