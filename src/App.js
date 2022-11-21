
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./pages/FormSignUp/SignUp";
import SignIn from "./pages/FormSignIn/SignIn";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import ListResidences from "./pages/ListResidences/ListResidences";
import CreateHouse from "./pages/CreateHouse/CreateHouse"
import CreateResidence from "./pages/CreateResidence/CreateResidence"
import ResidenceDetails from "./pages/ResidenceDetails/ResidenceDetails"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in"/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/residences" element={<ListResidences/>}/>
            <Route path="/residences/create" element={<CreateResidence/>}/>
            <Route path="/residences/:residenceId/houses/create" element={<CreateHouse/>}/>
            <Route path="/residences/:residenceId/houses" element={<ResidenceDetails/>}/>
            <Route path="/residences/house/edit/:houseId" element={<></>}/>

        </Routes>

      </BrowserRouter>
      <ToastContainer/>

     
    </>
    
  );
}


export default App;
