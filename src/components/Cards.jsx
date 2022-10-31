import React from 'react';
import Card from './Card.jsx';
import styles from '../styles/Cards.module.css';

export default function Cards(props){
    if(!props.cities){
        return <h1>No hay Ciudades</h1>
    }
    return (
        <div className={styles.container}>
            {
                props.cities && props.cities.map(city => (
                    <Card
                        key={city.id}
                        max={city.max}
                        min={city.min}
                        name={city.name}
                        img={city.img}
                        onClose={()=> alert(city.name)}
                    />
                ))
            }
        </div>
    )

}