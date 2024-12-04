'use client';
import React from 'react';

import { Navbar } from '@/app/components/navbar/navbar';
import BodyIndices from '@/app/components/bodyIndices/bodyIndices';
import BodyEmpresas from '@/app/components/bodyEmpresas/bodyEmpresasLineal';
import '../../i18n';
import GraficoTortaConTabla from '@/app/components/bodyTortaEmpresas/bodyEmpresasTorta';
import { Footer } from '@/app/components/footer/Footer';

const Home = () => {

  return (
    <div className="min-h-screen border bg-gray-0"style={{backgroundColor:"#c1faf6 "}}>
      <Navbar botonRedireccion={"Indices Bursatiles"} url={"./indiceBursatil"} />

      <div className="w-[80%] m-auto bg-zinc-50 p-4 rounded-lg shadow-gray-500 shadow-lg mb-8"style={{backgroundColor:'#eff0f0'}}>
        <GraficoTortaConTabla />
      </div>

      <div className="flex flex-col md:flex-col justify-center items-center gap-12 p-8"style={{backgroundColor:"#c1faf6 "}}>
        <div className="w-[70%] m-auto bg-zinc-50 p-4 rounded-lg shadow-gray-500 shadow-lg mb-8" style = {{backgroundColor:'#eff0f0'}}>
          <BodyIndices />
        </div>
        <div className="w-[70%] m-auto bg-zinc-50 p-4 rounded-lg shadow-gray-500 shadow-lg mb-8" style={{display: '',backgroundColor:'#eff0f0'}}>
          <BodyEmpresas />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default Home;