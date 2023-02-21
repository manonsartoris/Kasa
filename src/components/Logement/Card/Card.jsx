import React from "react";
import { Link } from "react-router-dom";
import './card.css'

export default function Card(props){
    return (
        <Link to={`/logement/${props.id}`}>
            <div className="card" style={{backgroundImage: `url(${props.cover})`, backgroundPosition: 'center'}}>
                <div className="a">
                    <p className="textCard">{props.title}</p>
                </div>
            </div>
        </Link>
    )
}