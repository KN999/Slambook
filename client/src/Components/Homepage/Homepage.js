import React from 'react';
import './Homepage.css';

function Homepage() {
    return (
        <div>
            <header id="home-header">
                <div classname="container">
                    <h1>Slambook</h1>
                    <h3>Nostalgia with a technical twist.</h3>
                </div>
            </header>
            <main id="home-content">
                <div classname="container" >
                    <h3><a href="#">Register with us</a></h3>
                    <legend>Or</legend>
                    <h3><a href="#">Manage your slambook</a></h3>
                </div>
            </main>
        </div>
    );
}

export default Homepage;
