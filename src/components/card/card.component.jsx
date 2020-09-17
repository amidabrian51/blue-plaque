import React from 'react';
import './card.styles.css';
export const Card = (props) => (
    <div className='card-container'>
       
       {(props.sign["photographed?"]) ? <img alt="sign" src={props.sign.thumbnail_url} width="200" height="200"/> : null}
        <h1>{props.sign.title}</h1>
        <p>{props.sign.inscription}</p>
    </div>
)