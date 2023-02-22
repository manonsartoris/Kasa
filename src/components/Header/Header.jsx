import React from "react";
import { Link } from "react-router-dom";
import KasaIcon from "../../assets/KasaIcon"
import './header.css'
import { useLocation } from "react-router-dom";


export default function Header(){

    const location = useLocation();
    return (
        <header>
            <div className="kasaIcon">
                <KasaIcon />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link className={`link ${location.pathname === "/" ? "active" : ""}`} to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link className={`link ${location.pathname === "/about" ? "active" : ""}`} to="/about">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}