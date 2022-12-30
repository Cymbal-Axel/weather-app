import React from 'react';
import Nav from './Nav.jsx'
import {useParams} from 'react-router-dom';


export default function City(props){
    let params = useParams();
    let citiId = parseInt(params.cityId) // puse parseInt porque el ID recibido por URL viene como un STRING

    let city = props.cities.filter((c)=> c.id === citiId);
    console.log(city[0])
    return (<div>
        <div>ID: {city[0].id}</div>
        <div>Nombre: {city[0].name}</div>
        <div>Temperatura maxima: {city[0].max}</div>
        <div>Temperatura minima: {city[0].min}</div>
        <div>Latitud: {city[0].latitude}</div>
        <div>Longitud: {city[0].longitude}</div>
        <div>Viento: {city[0].wind}</div>

     </div>)



}


{/*function onFilter(citieId){
        let city = cities.filter((c)=> c.id === citieId);
        if (city.length > 0){
          return city[0];
        } else {
          return null;
        }
      }*/}

/*
                    -----COMPONENTE DE CLASE-----

class City extends React.component{
    //Constructor cuando quiero definir un estado!
    //constructor(props){
        //super(props)
        //this.state = {}

    render(){
        return (
            <div>soy una city</div>
        )
    }
}
export default City;*/

