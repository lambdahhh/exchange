import React from 'react';
import Header from "../header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Rates from "../rates/rates";
import Converter from "../converter/converter";
import './app.css';

const App = () => {
    return (
            <BrowserRouter>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Rates/>}/>
                        <Route path="/rates" element={<Rates/>}/>
                        <Route path="/converter" element={<Converter/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    )
}

export default App;
