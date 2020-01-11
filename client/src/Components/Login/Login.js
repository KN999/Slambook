import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login (props) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] =  useState('');

    function onSubmit(event) {
        event.preventDefault();
        axios.post('/users/login', {
            username: username,
            password: password,
          })
          .then( (response) => {
               
            if(response.data.code === 102) 
            {  
                //localStorage.setItem('Token', user.username);
                props.history.push("/Dashboard");            
            }
            else 
            {
                console.log("ERROR : ",response.data.message);
                alert("Username or Password is incorrect");
            }
          })
          .catch(function (error) {
            alert("Something went wrong :(");
            console.log(error);
          });
    }

    return (
        <div id="login">
            <div id="form-login">
                <div className="form-head">
                    <div className="container">
                        <h2>
                            Login
                        </h2>
                    </div>
                </div>
                <div className="form-body">
                    <div className="container">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" name="username" className="form-field" autoComplete="off" value={username} onChange = {e => setUsername(e.target.value)} required />
                                <span data-placeholder="Username"></span>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-field" autoComplete="off" value={password} onChange = {e => setPassword(e.target.value)} required/>
                                <span data-placeholder="Password"></span>
                            </div>

                            <input type="submit" value="Log in" className="form-btn"/>

                        </form>
                    </div>
                </div>
                <div className="form-tail">
                    <div className="container">
                        Don't have a account? <a href="/Register">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;