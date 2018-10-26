import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Landing from './components/Misc/Landing';
import Doctor from './components/Doctor/doctor';
import Insurance from './components/Insurance/insurance';
import Pharmacist from './components/Pharmacist/pharmacist';

export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/doctor" component={Doctor} />
            <Route path="/pharmacist" component={Pharmacist} />
            <Route path="/insurance" component={Insurance} />
          </div>
        </Router>
      );
  }
}
