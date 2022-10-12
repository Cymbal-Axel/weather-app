import React from 'react';

export default function Cards(props){

    if(!props.cities){
        return <h1>No hay Ciudades</h1>
    }
    return <div>Cards component</div>

}