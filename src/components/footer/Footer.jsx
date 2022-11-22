import React, {useContext} from "react";
import { conjuntoContext } from "../../context/createContext.js";
import { Logo } from "../logo/Logo.jsx";
import './Footer.css'

export function Footer(){
  const context = useContext(conjuntoContext);
  
  const handleClick = ()=>{
    console.log(context)
  }
  return (
    <div className='footer'>
      <section className='Footer__section'>
        <Logo/>
        <button onClick={handleClick}>Presioname</button>
      </section>
    </div>
  )
}