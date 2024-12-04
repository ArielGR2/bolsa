"use client"

import { i18n } from 'next-i18next';
import React, { useEffect } from 'react'
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export function Navbar({ botonRedireccion }: any) {
  const { t } = useTranslation(); 

  const redireccion = botonRedireccion;
  useEffect(() => { }, [redireccion]);

  return (
    <div className="navbar bg-gray-400 text-white shadow-lg h-34 shadow-gray-800" style={{ backgroundColor: 'rgba(43,67,115,1)',margin: '0 0 25px 0' }} >
      <div className="navbar-start">
        <a className='pl-2'>
          <img src="./images/sse_logo.png" className="w-20 h-20" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex" >
        <h1 className="px-3 py-6 rounded-lg text-center font-bold text-xl tracking-wide bg-gradient-to-r text-white shadow-lg"style={{ backgroundColor: 'red' }}>
          {t('navbar.title')}
        </h1>
      </div>

      <div className="navbar-end pr-4">
      <LanguageSwitcher />
      </div>
    </div>
  );
}
