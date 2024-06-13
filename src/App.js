import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Splash from './pages/Splash';
import NewAbout from './pages/NewAbout';
import NewPortfolio from './pages/NewPortfolio';

const routes = [
  { path: '/', name: 'Splash', Component: Splash },
  { path: '/about', name: 'About', Component: NewAbout },
  { path: '/portfolio', name: 'Portfolio', Component: NewPortfolio },
]

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Splash} />
        <Route exact path={"/about"} component={NewAbout} />
        <Route exact path={"/portfolio"} component={NewPortfolio} />
      </div>
    </Router>
  )
}
