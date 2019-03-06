import React from 'react';
import Triangle from './shapes/triangle';
import Circle from './shapes/circle';
import Square from './shapes/square';


const cell = (props) => {
    console.log(props);
    let shape;
    //fiz assim so de sacanagem.
    let fill = props.fill === "full"  ? props.color : props.fill === "empty" ? "#fff" :  "url(#striped" +  props.colorName + ")";


    //console.log(fill);
    if (props.shape === "triangle") {
        shape = <Triangle color={props.color} fill={fill}/>
    }
    if (props.shape === "circle") {
        shape = <Circle  color={props.color} fill={fill}/>
    }
    if (props.shape === "square") {
        shape = <Square  color={props.color} fill={fill}/>
    }

    return (
        <div className="cell">
            <svg height="100" width="100">
                {shape}
            </svg>
        </div>
    )
}

export default cell;