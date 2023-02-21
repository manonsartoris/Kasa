import React from "react";
import { ReactComponent as KasaIcon} from "../../assets/LOGO.svg";
import './footer.css'

export default function Footer(){
    return (
        <footer>
            <KasaIcon width='30%'/>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}