import React from 'react';
import Card from './Card.jsx';
export default function Cards(props){
    if(!props.cities){
        return <h1>No hay Ciudades</h1>
    }
    return (
        <div>
            {
                props.cities && props.cities.map(city => (
                    <Card 
                        max={city.main.temp_max}
                        min={city.main.temp_min}
                        name={city.name}
                        img={city.weather[0].icon}
                        onClose={()=> alert(city.name)}
                    />
                ))
            }
        </div>
    )

}