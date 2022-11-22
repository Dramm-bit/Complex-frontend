import React from "react";
import {BsCheck2Square} from 'react-icons/bs';
import './logo.css'

export function Logo(){
  return (
    <div className='logo'>
      <BsCheck2Square className='logo_img' />
      <span className='logo__title'>ConSM</span>
    </div>

  )
}