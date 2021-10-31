import "./index.css";
import Home from "./Components/Home.js";
import AvengerList from "./Components/AvengerList.js";
import Avenger from "./Components/Avenger.js"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState } from 'react';
import heros from "./Data.js"

function App() {
  const [hero] = useState(heros);

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

          <Route exact path="/avengers/">
            < AvengerList hero={hero} />
          </Route>

          <Route path="/avengers/:hero">
            <Avenger key={hero.id} hero={hero}/>
          </Route>

        </div>
      </Switch>

    </Router>
  );
}

export default App;
