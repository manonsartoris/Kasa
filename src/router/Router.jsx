import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Logements from '../pages/Logements/Logements';
import About from '../pages/About/About';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';


export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/logement/:id" element={<Logements/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}
