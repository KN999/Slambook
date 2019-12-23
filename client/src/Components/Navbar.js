import React from 'react';
import './Navbar.css';
function Navbar() {
    return(
        <nav id="navbar">
            <div classname="container">
                <ul>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;