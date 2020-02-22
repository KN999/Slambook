import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Search.css';

function Search (props) {

    const [username, setUsername] = useState('');
    const [result, setResult] = useState();
    let temp = {
        name:'ram'
    };

    function onSubmit (event) {
        event.preventDefault();
        axios.get('actions/search', {
            params: {
              username: username,
            }
          })
            .then(res => {
                if(res.data.code === 405) 
                {  
                    setResult(res.data.user);
                    temp = res.data;
                    console.log("searched!");
                    props.history.push("/");
                }
                else 
                {
                    console.log("ERROR : ",res.data.message);
                    alert("Username not found");
                }

            })
            .catch(err => {
                console.log(err);
                alert('Something went wrong!');
            })

    }

    useEffect(()=>{console.log(result)},[result]);
    
    return (
        <div id="dash-search">
            <div className="container">
                <form onSubmit={onSubmit} className="search-form">
                    <div className="form-group input-search">
                        <input type="text"
                            name="username"
                            className="search form-field"
                            autoComplete="off"
                            placeholder="Search"
                            onChange={(val)=>setUsername(val.target.value)}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Go" className="form-btn" />
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default Search;