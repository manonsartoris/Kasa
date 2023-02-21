import React from "react"
import Logement from "../../components/Logement/Logement";
import data from '../../json/logements.json'

export default function Logements() {
        return (
            <div>
                <Logement type="full" data={data} />
            </div>
        )
}