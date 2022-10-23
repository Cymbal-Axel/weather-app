import React from 'react';
import s from '../styles/Card.module.css';

export default function Card(props){
    return (
    <div>
        <button onClick={props.onClose} className={s.btn}>X</button>
        <h4>{props.name}</h4>
        <div>
            <p>Min</p>
            <p>{props.min}</p>
            <p>Max</p>
            <p>{props.max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
    </div>
        )
}