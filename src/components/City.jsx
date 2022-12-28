import React from 'react';


export default function City(props){
    if(!props){
        return(<div>La ciudad no existe</div>)
    }
    return (
    <div>

        <div>ID: {props.cities[0].id}</div>
        <div>Nombre: {props.cities[0].name}</div>
        <div>Temperatura maxima: {props.cities[0].max}</div>
        <div>Temperatura minima: {props.cities[0].min}</div>
        <div>Latitud: {props.cities[0].latitude}</div>
        <div>Longitud: {props.cities[0].longitude}</div>

    </div>)



    /*let params = useParams();
    return(
        <div>soy la city numero:{params.cityId}</div>
    )*/
}



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

