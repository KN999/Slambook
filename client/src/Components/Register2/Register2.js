import React, {useState} from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
//import 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';

function Register2 (props) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    function onSubmit(event) {
        event.preventDefault();

        if(confirmpassword === password) {
            axios.post('/users/register', {
                name: name,
                username: username,
                password: password,
            })
            .then( (response) => {
                if(response.data.code === 303) {
                    props.history.push("/Dashboard");
                }
                else {
                    alert("User already exist!");
                    console.log("ERROR: "+response.data.message);
                }
            })
            .catch( (error) => {
                alert("Something went wrong! :(");
                console.log(error);
            })
        }
        else {
            alert("Password and Confirm Password are not same.");
        }
    }

    return (
        <div id="register">
            <div id="form-register">
                <div className="form-head">
                    <div className="container">
                        <h2>
                            Register
                        </h2>
                    </div>
                </div>
                <div className="form-body">
                    <div className="container">
                    <div class="row">
                        <form class="col s12">
                            <div class="input-field">
                                <input id="username_inline" type="text" class="validate"/>
                                <label for="username_inline">username</label>
                                <span class="helper-text" data-error="wrong" data-success="right"></span>
                            </div>
                            <div class="input-field">
                                <input id="name_inline" type="text" class="validate"/>
                                <label for="name_inline">Name</label>
                                <span class="helper-text" data-error="wrong" data-success="right"></span>
                            </div>
                            <div class="input-field">
                                <input id="password" type="password" class="validate"/>
                                <label for="password">Password</label>
                                <span class="helper-text" data-error="wrong" data-success="right"></span>
                            </div>
                            <div class="input-field">
                                <input id="confirmpassword" type="password" class="validate"/>
                                <label for="confirmpassword">Confirm Password</label>
                                <span class="helper-text" data-error="wrong" data-success="right"></span>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className="form-tail">
                    <div className="container">
                        already have a account?<a href="/Login">Log in</a>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register2;