import React from 'react';
import './Login.css';

function Login () {
    return (
        <div id="login">
            <div className="form">
                <div className="form-head">
                    <div className="container">
                        <h2>
                            Login
                        </h2>
                    </div>
                </div>
                <div className="form-body">
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <input type="text" name="username" className="form-field" autoComplete="off" />
                                <span data-placeholder="Username"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="password" className="form-field" autoComplete="off" />
                                <span data-placeholder="Password"></span>
                            </div>

                            <input type="submit" value="Log in" className="form-btn"/>

                        </form>
                    </div>
                </div>
                <div className="form-tail">
                    <div className="container">
                        Don't have a account? <a href="#">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;