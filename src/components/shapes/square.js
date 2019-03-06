import React from 'react';


const square = (props) => {
    return (
        <rect width='80' height='80' stroke={props.color} strokeWidth="4" fill={props.fill}></rect>
    )
}

export default square;