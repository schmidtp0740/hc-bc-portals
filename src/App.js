import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from './components/Main/main';
import Doctor from './components/Doctor/doctor';
import Insurance from './components/Insurance/insurance';
import Pharmacist from './components/Pharmacist/pharmacist';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>      
            <Route exact path="/" component={Main} />
            <Route path="/doctor" component={Doctor} />
            <Route path="/pharmacist" component={Pharmacist} />
            <Route path="/insurance" component={Insurance} />
          </div>
        </Router>
      </div>
      );
  }
}
