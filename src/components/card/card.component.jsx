import React from 'react';
import './card.styles.css';
import {Link} from 'react-router-dom';
export const Card = (props) => (
    <Link to={`/DetailPlaqueCard/${props.sign.id}`} >
    <div className='card-container'>
       {(props.sign["photographed?"]) ? <img alt="sign" src={props.sign.thumbnail_url} width="300" height="300"/> : <img alt="blank sign" src="/blank_blue_plaque.jpeg" width="300" height="150"/>}
        <h1>{props.sign.title}</h1>
        <p>{props.sign.inscription}</p>
        <p>{props.sign.address}</p>
    </div>
    </Link>
)