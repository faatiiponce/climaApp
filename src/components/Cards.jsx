import React from 'react';
import Card from './Card';
import e from './estilo.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div className= {e.flexColumna}>
    
    {
    props.cities.map((ciudad) => (
       <Card 
          max={ciudad.max}
          min={ciudad.min}
          name={ciudad.name}
          img={ciudad.img}
          onClose={props.onClose}
          key = {ciudad.id} 
          id = {ciudad.id} >
           </Card>
    ))
    } 
    
    </div>
};