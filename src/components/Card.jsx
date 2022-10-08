import React from 'react';

export default function Card(props){
console.log(props)
    return (<div>
        <button onClick={props.onClose}>X</button>
        <h4>{props.name}</h4>
        <div>
            <p>Min</p>
            <p>{props.min}</p>
            <p>Max</p>
            <p>{props.max}</p>
        </div>
        </div>)
}