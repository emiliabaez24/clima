// import {link} from 'react-router-dom';
import './pags.css';
import React, {useEffect, useState} from "react";
import ContadorPag2 from "../componentes/Contador";

const API_KEY = '4b6131726c5195ad62470aa8e4060f38';

export default function Pantalla2(){
    const [contador, setContador] = useState(0);

    const[datosClima, setDatosClima] = useState([]);

    const ciudades = ['Córdoba','Buenos Aires', 'Montevideo','Quito' , 'La Paz', 'Lima' ]

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    useEffect(() => {
        async function obtenerClimas(){
            try {
            const respuestas = await Promise.all(
                    ciudades.map(ciudad =>
                        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
                            .then(res => res.json())
                    )
                );
                setDatosClima(respuestas);
            } catch (error) {
                console.error("Error al obtener el clima:", error);
            }
        }
        obtenerClimas();
    }, []);

    return(
        <div>
            <h1> Contador: {contador} </h1>
            <div>
                <ContadorPag2 texto="+" onClick={sumar}/>
                <ContadorPag2 texto="-" onClick={restar}/>
            </div>

            <h2>CLIMA: </h2>
            <div className="climas-grid">
                {datosClima.map((ciudad, index) => (
                    <div key={index} className="tarjeta-clima">
                        <h3>{ciudad.name}</h3>
                        <p>{ciudad.main?.temp} °C</p>
                        {ciudad.weather && ciudad.weather[0] &&
                            <img
                                src={`https://openweathermap.org/img/wn/${ciudad.weather[0].icon}@2x.png`}
                                alt={ciudad.weather[0].description}
                            />
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}
