import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './App.css';
/*import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';*/
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route exact path='/' component={Homepage} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
    </Router>
  );
}

export default App;
