import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import AddPage from './Components/AddPage/AddPage';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route exact path='/' component={Homepage} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <PrivateRoute authed={Boolean(localStorage.getItem('Token'))} exact path='/Addpage' component={AddPage} />
        <PrivateRoute authed={Boolean(localStorage.getItem('Token'))} exact path='/Dashboard' component={Dashboard} />
    </Router>
  );
}

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => Boolean(localStorage.getItem('Token'))
        ? <Component {...props} />
        : <Redirect to={{pathname: '/Login', state: {from: props.location}}} />}
    />
  )
}

export default App;
