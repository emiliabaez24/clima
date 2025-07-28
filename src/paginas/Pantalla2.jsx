// import {link} from 'react-router-dom';
import './pags.css';
import React, {useState} from "react";
import ContadorPag2 from "../componentes/Contador";

export default function Pantalla2(){
    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return(
        <div>
            <h1> Contador: {contador} </h1>
            <div>
                <ContadorPag2 texto="+" onClick={sumar}/>
                <ContadorPag2 texto="-" onClick={restar}/>
            </div>
        </div>
    );
}
