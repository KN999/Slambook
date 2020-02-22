import React, {useState} from 'react';
import './Register.css';
import axios from 'axios';

function Register (props) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    function onSubmit(event) {
        event.preventDefault();

        if(confirmpassword === password) {
            axios.post('/user/register', {
                name: name,
                username: username,
                password: password,
            })
            .then( (response) => {
                if(response.data.code === 303) {
                    console.log("result : ", response);
                    localStorage.setItem('Token', response.data.token);
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
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Username" name="username" className="form-field" autoComplete="off" value={username} onChange={ e => setUsername(e.target.value) } required/>
                                <span data-placeholder=""></span>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Name" name="name" className="form-field" autoComplete="off" value={name} onChange={ e => setName(e.target.value) } required/>
                                <span data-placeholder=""></span>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password" className="form-field" autoComplete="off" value={password} onChange={ e => setPassword(e.target.value)} required/>
                                <span data-placeholder=""></span>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" name="confirm-password" className="form-field" autoComplete="off" value={confirmpassword} onChange={ e => setConfirmpassword(e.target.value)} required/>
                                <span data-placeholder=""></span>
                            </div>
                            <input type="submit" value="Register" className="form-btn"/>
                        </form>        
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

export default Register;