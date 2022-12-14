import React, {useState} from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';
import {Route, Routes} from 'react-router-dom';
import About from './components/About.jsx';
import City from './components/City.jsx';
import {useParams} from 'react-router-dom';

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
        //por cada ciudad vieja comparar el id de la misma contra el id de la nueva
        var yaExiste = false;
        cities.forEach(oldCity =>{    

          if(oldCity.id === city.id){
            setCities(oldCities => [...oldCities]);
            alert('ciudad ya existente');
            yaExiste = true;
          }
        })

        if(yaExiste === false){
          setCities(oldCities => [...oldCities, city]);
        }

        
      }else{
        alert('Ciudad no encontrada')
      }
    })
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }
  


  return (
    <div className="App">
 
      <Routes>
        <Route path="/" element={
            <div>
              <Nav onSearch={onSearch}/>
              <Cards cities={cities} onClose={onClose}/>             
            </div>}/>
        
        <Route path={"/city/:cityId"} element={<City cities={cities}/>}/>
      </Routes>


      <Routes>
        <Route path={"/About"} element={<About />}/>
      </Routes>

      

    </div>
  );

  
  
}

export default App;
