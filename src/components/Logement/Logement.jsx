import React from "react";
import Card from "./Card/Card";
import Full from "./Full/Full";
import './Logement.css'

export default function Logement({type, data}){
    return (
        <div>
            {type === 'card' ? 
                <Card key={data.id} id={data.id} title={data.title} description={data.description} cover={data.cover} data={data} className='cardList'/> 
            :   <Full data={data}/> 
            }
        </div>
    );
}
