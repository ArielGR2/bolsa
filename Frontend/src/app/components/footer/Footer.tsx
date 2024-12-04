"use client"

import { useTranslation } from "react-i18next";
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import React from 'react'
import './Footer.css'
import telefono from '../../../../public/images/telefono.png'
import ubicacion from '../../../../public/images/ubicacion.png'
import mail from '../../../../public/images/mail.png'


export const Footer = () => {
  return (
    <div className='div-Footer'>
      <h2 className='titulo'>Contacto del desarrollador WEB</h2>
      <div className='superior'>
        <div className='fotter_info'>
          <img src={ubicacion.src} alt="" />
          <p>Av. Avellaneda 3670 - Olavarría |</p>
        </div>

        <div className='fotter_info'><img src={mail.src} alt="" />
          <p>contacto@arielromera.com.ar |</p>
        </div>

        <div className='fotter_info'>
          <img src={telefono.src} alt="" />
          <p>2284 - 999999</p>
        </div>

      </div>
      <hr />
      <div className='inferior'>
        Ariel Romera Ⓡ Corporation

      </div>



    </div>

  )
}
