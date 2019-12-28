import React from 'react';
import './Register.css';

function Register () {
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
                        <form>
                            <div className="form-group">
                                <input type="text" name="username" className="form-field" autoComplete="off" />
                                <span data-placeholder="Username"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="name" className="form-field" autoComplete="off" />
                                <span data-placeholder="Name"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="password" className="form-field" autoComplete="off" />
                                <span data-placeholder="Password"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="confirm-password" className="form-field" autoComplete="off" />
                                <span data-placeholder="Confirm Password"></span>
                            </div>
                            <input type="submit" value="Register" className="form-btn"/>
                        </form>        
                    </div>
                </div>
                <div className="form-tail">
                    <div className="container">
                        already have a account?<a href="#">Log in</a>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;