import React from 'react';
import Header from "../header/header";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;
