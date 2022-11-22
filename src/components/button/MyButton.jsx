import React from "react";
import { Link } from "react-router-dom";
import './myButton.css'

export function MyButton({children, to}){
  return (
    <Link to={to} className="MyButton">
      {children}
    </Link>
  )
}