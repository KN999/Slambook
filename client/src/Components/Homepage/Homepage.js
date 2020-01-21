import React from 'react';
import './Homepage.css';

function Homepage() {
    return (
        <div id="homepage">
            <header id="home-header">
                <div className="container">
                    <h1>Slambook</h1>
                    <h3>Nostalgia with a technical twist.</h3>
                </div>
            </header>
            <main id="home-content">
                <div className="container" >
                    <h3><a href="/Register">Register with us</a></h3>
                    <legend>Or</legend>
                    <h3><a href="/Login">Manage your slambook</a></h3>
                </div>
            </main>
        </div>
    );
}

export default Homepage;