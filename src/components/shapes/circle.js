import React from 'react';


const circle = (props) => {
    return (
        <circle cx='50' cy='50' r='40' stroke={props.color} strokeWidth="4" fill={props.fill} />
    )
}

export default circle;