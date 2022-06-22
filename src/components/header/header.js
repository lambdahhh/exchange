import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header-brand">
                <Link to="/">
                    КУРС ВАЛЮТ
                </Link>
            </div>
            <div>
                <Link to="/rates">Список валют</Link>
                <Link to="/converter">Конвертер</Link>
            </div>
        </div>
    )
}

export default Header;
