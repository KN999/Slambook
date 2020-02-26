import React, {useState, useEffect}from 'react';
import axios from 'axios';
import './SlamPages.css';

function AlternativeText () {
    return (
        <div className="alternate-text">
            Try spreading your slam username to your friend.
        </div>
    )
}

function showSlampages (data) {
    return (
        <div className="display-flex">
            {data.map( (slampage) => (
                <table>
                    <tr>
                        <td>Name</td>
                        <td>: {slampage.writer}</td>
                    </tr>
                    <tr>
                        <td>My biggest dream</td>
                        <td>: {slampage.Q1}</td>
                    </tr>
                    <tr>
                        <td>I have a crush on</td>
                        <td>: {slampage.Q2}</td>
                    </tr>
                    <tr>
                        <td>About you I feel</td>
                        <td>: {slampage.Q3}</td>
                    </tr>
                    <tr>
                        <td>Something I like about you</td>
                        <td>: {slampage.Q4}</td>
                    </tr>
                    <tr>
                        <td>Something I like about you</td>
                        <td>: {slampage.Q5}</td>
                    </tr>
                    <tr>
                        <td>Something I hate about you</td>
                        <td>: {slampage.Q6}</td>
                    </tr>
              </table>
            ))}
        </div>
    )
}

function SlamPages () {
    const [Slampages, setSlampages] = useState([]);
    const [username, setusername] = useState(localStorage.getItem('Token'));
    useEffect(()=>{
        axios.get('/actions/slampages', {
            params : {
                username : username,
            }
        })
        .then(res => {
            if(res.data.code === 404) {
                setSlampages(res.data.slambook)
                console.log(res);
            }
            else {
                alert("can't Retrieve Data");
                console.log("can't Retrieve Data : "+res);
            }
        })
        .catch(err => {
            console.log("Erroe : "+err);
            alert("Something went wrong!");
        })
    },[])

    return (
        
        <div id="slam-pages">
            <div className="container">
                {(Slampages.length != 0)?showSlampages(Slampages):AlternativeText()}
            </div>
        </div>
    );
}

export default SlamPages;

