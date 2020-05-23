import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Splash from './pages/Splash';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  )
}
