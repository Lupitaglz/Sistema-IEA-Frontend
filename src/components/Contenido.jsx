import React from 'react'
import './styles/conten.css'
import background from "../img/barra.png"
import iea from "../img/instituto.png"
import NavBar from "./NavBar"

const Contenido = () => {
  return (
<div className='container'>
<NavBar/>
<div className='barra' style={{ backgroundImage: `url(${background})` }}></div>
    <div className='con'>

    <div className='tittle'>
        Plan de trabajo para desarrollo de plataforma del plan estratégico del sistema de educación superior 2022-2027
        <img className='logoiea' src={iea}  alt="" />
    </div>
    
    <div className='quienessomos' id='seccion1'>
    <strong className='mision'>Mision</strong> 
      <p> 
          Proporcionar servicios educativos con excelencia, equidad, inclusión y calidez para coadyuvar en la formación integral de las y los estudiantes adquiriendo las competencias necesarias para lograr una vida plena que contribuya al desarrollo de una sociedad plural, incluyente y humanista.
          Vision
          Lograr hacer del Sistema Educativo Estatal líder y ejemplo para la construcción de una sociedad evolutiva, humanista, vinculante y pilar fundamental en el desarrollo de los individuos, a través de la equidad, inclusión y compromiso.</p>

    </div>
        
        
        
    </div>
</div>
  )
}

export default Contenido