import React from 'react';

const triangle = (props) => {

    return (
        <polygon points="10,90 50,10 90,90" stroke={props.color} strokeWidth="4" fill={props.fill}/>
        //stroke='green' strokeWidth='4' fill='yellow'
    )
}

export default triangle;