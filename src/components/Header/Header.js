import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='freshClub'>
            <h4 className='nav-text'>FRESHY SITES CLUB</h4>
            <a href="/home">Home</a>
            <a href="order">Order</a>
            <a href="other">Other</a>
            <a href="search">Search</a>
        </nav>

    );
};

export default Header;