import React from 'react';
import s from '../styles/Card.module.css';

export default function Card(props){
    return (
    <div className={s.card}>
        <button onClick={props.onClose} className={`${s.btn} ${s.btnColor}`}>X</button>
        <h4 className={s.cardName}>{props.name}</h4>
        <div className={s.middleDiv}>
            <div className={s.temperatureDiv}>
                <p>Min</p>
                <p>{props.min}</p>
            </div>
            <div className={s.temperatureDiv}>
                <p>Max</p>
                <p>{props.max}</p>
            </div>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
    </div>
        )
}