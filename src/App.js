import './App.css';
import "./index.css";
import Home from "./Components/Home.js";
import AvengerList from "./Components/AvengerList.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState } from 'react';

function App() {
  return (
    <Router>

      <nav className='navbar'>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/avengers"> Avengers </Link>
        </li>
      </nav>

      <Switch>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/avengers" component={AvengerList} />
        </div>
      </Switch>
      
    </Router>
  );
}

export default App;
