import React from "react"
import Header from "../../components/Header/Header"
import './About.css'
import Collapse from "../../components/Collapse/Collapse"
import Banner from "../../components/Banner/Banner"
import Footer from '../../components/Footer/Footer'

export default function About() {
    return (
        <div>
            <Header />
            <section className="bodyAbout">
                <div className="bannerAbout">
                    <Banner />
                </div>
                <div className="collapses">
                    <Collapse className='collapse' title={'Fiabilité'} description={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'} />
                    <Collapse className='collapse' title={'Respect'} description={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} />
                    <Collapse className='collapse' title={'Service'} description={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} />
                    <Collapse className='collapse' title={'Sécurité'} description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
                </div>
            </section>
            <Footer />
        </div>
    )
}