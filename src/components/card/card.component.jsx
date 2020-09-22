import React from 'react';
import './card.styles.css';
export const Card = (props) => (
    <div className='card-container'>
       
       {(props.sign["photographed?"]) ? <img alt="sign" src={props.sign.thumbnail_url} width="300" height="300"/> : <p>There is no photograph for the plaque</p>}
        <h1>{props.sign.title}</h1>
        <p>{props.sign.inscription}</p>
        <p>{props.sign.address}</p>
    </div>
)