import React from "react";
import './myButton.css'

export function MyButton({children}){
  return (
    <button className="MyButton" onClick={()=>console.log("presionado")}>
      {children}
    </button>
  )
}