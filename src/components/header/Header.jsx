import React from "react";
import { Link } from "react-router-dom";
import './header.css'

export function Header(){
  return(
    <header className='header' >
      <nav className='header__nav' >
        <ul className='header__nav__list' >
          <li className='header__nav__list__element' >
            <Link to='/conjuntos/nuevoConjunto' className='element__Link'>Crear un nuevo conjunto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}