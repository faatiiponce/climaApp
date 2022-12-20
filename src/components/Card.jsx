import React from "react";
import e from "./estilo.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={e.estiloCard}>
      <button className={e.estiloX} onClick={(e) => {
          e.preventDefault();
          props.onClose(props.id);
        }}>
        X
      </button>
      <h1 className={e.estiloCiudad}>{props.name}</h1>

      <div className={e.estiloGlobal}>
        <ul>
          <img
            className={e.estiloImg}
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt="hw"
          />
          <div className={e.prueba}>
            <p className={e.estiloMinMax}>Min </p>
            <p className={e.estiloMinMax}>{props.min}</p>
          </div>
          {/* <p className={e.estiloMinMax}>{props.min}</p> */}
          <div className={e.prueba}>
            <p className={e.estiloMinMax}>Max </p>
            <p className={e.estiloMinMax}>{props.max}</p>
          </div>
          
        </ul>
      </div>
      
    </div>
  );
}
