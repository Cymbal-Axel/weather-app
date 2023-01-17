import React from 'react';
import Card from './Card.jsx';
import styles from '../styles/Cards.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cards(props){
    if(!props.cities){
        return <h1>No hay Ciudades</h1>
    }


    return (
        <div>
    <Container>
        <Row className={styles.rcontainer}>
            
                <Col className={styles.child}>
                
                    {
                        props.cities && props.cities.map(city => (
                            <Card
                                key={city.id}
                                max={city.max}
                                min={city.min}
                                name={city.name}
                                img={city.img}
                                id={city.id}
                                onClose={()=>props.onClose(city.id)}
                            />
                        ))

                    }
                </Col>
            
        
        </Row>
    </Container>
    </div>
    )
/* 
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
                        id={city.id}
                        onClose={()=>props.onClose(city.id)}
                    />
                ))

            }
        </div>
    )
*/
}