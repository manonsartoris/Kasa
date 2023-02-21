import React from "react";
import './Banner.css'

export default function Banner(props){
    return (
        <div className="banner">
            <p>{props.title}</p>
            <p>{props.title2}</p>
        </div>
    )
}