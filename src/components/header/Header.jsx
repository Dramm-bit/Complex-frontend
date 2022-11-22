import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo.jsx";
import './header.css'

export function Header({ruta, title}){
  return(
    <header className='header' >
      <nav className='header__nav' >
        <ul className='header__nav__list' >
          <li className='header__nav__list__element'>
            <Logo />
          </li>
          <li className='header__nav__list__element' >
            <Link to={ruta} className='element__Link'> {title} </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}