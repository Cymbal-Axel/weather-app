import React from 'react';
import {useParams} from 'react-router-dom';


export default function City(props){

    let params = useParams();
    return(
        <div>soy la city numero:{params.cityId}</div>
    )
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

