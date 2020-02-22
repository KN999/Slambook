import React from 'react';
import Search from '../Search/Search';
import SlamPages from '../SlamPages/SlamPages';
import './Dashboard.css';

function Dashboard(props) {

    return (
        <div id="dashboard">
            <div className="dash-head">
                <div className="container">
                    <h1>SlamBoard</h1>
                </div>
            </div>
            <Search props={props}/>
            <SlamPages />
        </div>
    );
}

export default Dashboard;