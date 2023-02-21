import React, { useState } from "react";
import './Collapse.css'
import { ReactComponent as Arrow } from "../../assets/Vector.svg";

export default function Collapse(props){
  const [open, setOpen] = useState(false);


  return (
    <div className="bodyCollape">
        <div className="title" onClick={() => setOpen(!open)}>
            <h2>{props.title}</h2>
            <div className="arrow">
                <Arrow style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
            </div>
        </div>
        {open ? (
            <div className="text">
                <div>{props.description}</div>
            </div>
        ) : null}
      
    </div>
  )
}