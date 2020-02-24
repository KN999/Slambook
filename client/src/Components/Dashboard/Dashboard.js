import React from 'react';
import Search from '../Search/Search';
import SlamPages from '../SlamPages/SlamPages';
import './Dashboard.css';

function Dashboard(props) {
   
    function onClick() {
        localStorage.setItem('Token', '');
        props.history.push("/");     
    }

    return (
        <div id="dashboard">
            <div className="dash-head">
                <div className="container">
                    <h1>SlamBoard</h1>
                </div>
                <div className="Logout">
                    <a className="Logout-Button" onClick={onClick}>Logout</a>
                </div>
            </div>
            <Search props={props}/>
            <SlamPages />
        </div>
    );
}

export default Dashboard;