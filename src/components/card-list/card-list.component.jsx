import React from 'react';
import './card-list.styles.css';

export const CardList = (props)=> {
    console.log(props);
    return <div className='card-list'>
       {props.signs.map(sign => (
           <h1 key={sign.id}>{sign.title}</h1>
       ))}
    </div>
}