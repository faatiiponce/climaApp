import React, { useState } from "react";
import e from "./estilo.module.css";

// export default function SearchBar({onSearch}) {
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       onSearch("Cairns");
//     }}>
//       <input className={e.estiloBarra} type = 'text' placeholder ='Buscar ciudad:' />
//       <button className={e.estiloBoton} onClick={() => props.onSearch('Ciudad')}>Agregar</button>
//     {/* </form> */}
//   );
// }

export default function SearchBar(props) {
  // acá va tu código
  const [input, setInput] = useState("")
  return (
    <div className={e.test}>
      <input
        className={e.estiloBarra}
        type="text"
        placeholder="Buscar ciudad:"
        onChange={(e) => {
          setInput(e.target.value);
        
        }}
        value = {input}
      />
      <button
        className={e.estiloBoton}
        onClick={(e) => {
          e.preventDefault();
          props.onSearch(input);
          setInput("")
        }}
      >
        Agregar
      </button>
    </div>
  );
}

// width: '100px',
// border: 'black',
// position: 'central
