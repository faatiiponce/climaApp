import React, { useState } from "react";
import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
// import SearchBar from './components/SearchBar.jsx';
// import data, { Cairns } from './data.js';
// import data from './data.js';
// import './components/estilo.module.css'
var apiKey = '4ae2636d8dfbdc3044bede63951a019b'
function App() {
  const [ciudades, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

  return (
    // <div className= 'fondoTest'>
    <div className="App">
      <div>
        
        <Nav onSearch={onSearch} />
      </div>
      {/* <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div> */}
      {/* <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div> */}
      
      <div>
        <Cards cities={ciudades} onClose={onClose} />
      </div>
     
    </div>
    // </div>
  );
}

export default App;
