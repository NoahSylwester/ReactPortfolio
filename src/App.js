import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Splash from './pages/Splash';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const routes = [
  { path: '/', name: 'Splash', Component: Splash },
  { path: '/about', name: 'About', Component: About },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
]

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Splash} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/portfolio"} component={Portfolio} />
      </div>
    </Router>
  )
}
