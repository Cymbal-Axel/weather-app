import React, {useState} from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json()) //cuando tenga la respuesta, la paso a json con el .json para manipularla
    .then(response_json => {
      if(response_json.main !== undefined){
        const city ={
          min: Math.round(response_json.main.temp_min),
          max: Math.round(response_json.main.temp_max),
          id: response_json.id,
          img: response_json.weather[0].icon,
          wind: response_json.wind.speed,
          temp: response_json.main.temp,
          name: response_json.name,
          longitude: response_json.coord.lon,
          latitude: response_json.coord.lat

        };
        setCities(oldCities => [...oldCities, city]);
      }else{
        alert('Ciudad no encontrada')
      }
    })
  }

  return (
    <div className="App">

      <Nav onSearch={onSearch}/>

     {/* <div>
        <Card 
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={()=> alert('cerrar')}
        />
      </div>
     <hr />*/}

      <div>
        <Cards cities={cities}/>
      </div>
      <hr/>
    </div>
  );
}

export default App;
