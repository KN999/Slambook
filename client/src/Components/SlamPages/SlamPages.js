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
        <div>
            {data.map( (slampage) => (
                <div>
                    Writer : {slampage.writer}
                    Q1 : {slampage.Q1}
                    Q2 : {slampage.Q2}
                    Q3 : {slampage.Q3}
                    Q4 : {slampage.Q4}
                    Q5 : {slampage.Q5}
                </div>
            ))}
        </div>
    )
}

function SlamPages () {
    const [Slampages, setSlampages] = useState([]);
    const [username, setusername] = useState('kn99');
    useEffect(()=>{
        axios.get('/actions/slampages', {
            params : {
                username : username,
            }
        })
        .then(res => {
            if(res.data.code === 404) {
                setSlampages(res.data.slambook.slampages)
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
        <div className="slam-pages">
            <div className="container">
                {(Slampages)?showSlampages(Slampages):AlternativeText()}
            </div>
        </div>
    );
}

export default SlamPages;

