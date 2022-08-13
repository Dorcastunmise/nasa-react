import React from 'react';

function Setting(props) {
   return (
    <div className='contact-card'>
        <img src={props.img}></img>
        <h1>{props.name}</h1>
        <p>{props.word}</p>
    </div>
   )
}
export default Setting