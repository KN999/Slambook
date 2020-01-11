import React from 'react';
import Search from '../Search/Search';
import SlamPages from '../SlamPages/SlamPages';
import './Dashboard.css';

function Dashboard() {

    return (
        <div id="dashboard">
            <div className="dash-head">
                <div className="container">
                    <h1>SlamBoard</h1>
                </div>
            </div>
            <Search />
            <SlamPages />
        </div>
    );
}

export default Dashboard;