import React from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import './Error.css'

export default function Error() {
    return (
        <div>
            <Header />
            <div className="error">
                <div className="numberOups">
                    <p className="number">404</p>
                    <div className="oups">
                        <p>Oups! La page que</p>
                        <p className="oups2">vous demandez n'existe pas.</p>
                    </div>
                </div>
                <div className='home'>
                    <Link to='/'>Retourner sur la page d’accueil</Link>
                </div>
            </div>
        </div>
    )
}