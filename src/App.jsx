import { Routes, Route } from "react-router-dom"
import React from 'react';
import Contenido from "./components/Contenido";
import Inicio from "./components/Inicio"
import Tabla from "./components/Tabla"
import './index.css'

export function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={ <Contenido /> } />
                <Route path="contenido" element={ <Inicio /> } />
                <Route path="Tabla" element={ <Tabla /> } />
            </Routes>
        </div>
        
    )
}

export default App;
