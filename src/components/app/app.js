import React from 'react';
import Header from "../header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Rates from "../rates/rates";
import Converter from "../converter/converter";

const App = () => {
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Rates/>}/>
                    <Route path="/rates" element={<Rates/>}/>
                    <Route path="/converter" element={<Converter/>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default App;
