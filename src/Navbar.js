// Navbar.js
import React from 'react';
import './Navbar.css'; 
// import { Navbar } from './Navbar';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">        About</a></li>
                <li><a href="#">                    Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;