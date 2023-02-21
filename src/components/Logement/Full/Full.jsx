import React from "react";
import Carousel from "../../Carousel/Carousel";
import Collapse from "../../Collapse/Collapse";
import Error from "../../../pages/Error/Error";
import Tag from "../../Tag/Tag";
import { useParams } from "react-router-dom";
import data from '../../../json/logements.json'
import Rating from '../../Rating/Rating'
import './Full.css'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function Full(){
    const { id } = useParams();
    const logement = data.find((logement) => logement.id === id);

    if(logement === undefined){
        return (
            <Error />
        )
    }

    const TagList = logement.tags.map(tag => (
        <Tag key={tag} tags={tag} />
      ))
      
    const EquipmentList = logement.equipments.map(equipment => (
        <div key={equipment}>{equipment}</div>
    ))
    return (
        <div>
            <Header/>
                <section className="bodyHousing" >
                    <Carousel images={logement.pictures}/>
                    <div className="full">
                        <div className="housing">
                            <div className="housingTitle">
                                <h1>{logement.title}</h1>
                                <p>{logement.location}</p>
                            </div>
                            <div className="tagList">{TagList}</div>
                        </div>
                        <div className="tagRating">
                            <div className="housingHost">
                                <p>{logement.host.name}</p>
                                <img src={logement.host.picture} alt={logement.host.name}/>
                            </div>
                            <Rating rating={logement.rating} />
                        </div>
                    </div>
                
                    <div className="description">
                        <div className="housingDescription">
                            <Collapse title={'Description'} description={logement.description}/>
                        </div>
                        <div className='housingDescription'>
                            <Collapse title={'Équipements'} description={EquipmentList}/>
                        </div>  
                    </div>
                </section>
            <Footer />
        </div>
    )
}