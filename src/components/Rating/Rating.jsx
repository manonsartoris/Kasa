import React from "react";
import './Rating.css'
import {ReactComponent as StarGrey} from '../../assets/starGrey.svg'
import {ReactComponent as StarPink} from '../../assets/starPink.svg'

export default function Rating(props) {

    const starPink = Array.from({length: props.rating}, () => <StarPink width='100%'/>);
    const starGrey = Array.from({length: 5 - props.rating}, () => <StarGrey width='100%'/>);

    return (
        <div className="rating">
            {starPink.map((star, index) => (
                <div key={index}>{star}</div>
            ))}
            {starGrey.map((star, index) => (
                <div key={index}>{star}</div>
            ))}
        </div>
    )
}