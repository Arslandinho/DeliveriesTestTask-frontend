import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import DeliveryComponent from './DeliveryComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/deliveries' exact={true} component={DeliveryComponent}/>
          </Switch>
        </Router>
    )
  }
}

export default App;