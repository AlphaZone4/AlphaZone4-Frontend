// React
import React, { Component } from 'react';
// React-Router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { Navbar } from 'react-bootstrap';

import DatabaseView from "./containers/DatabaseView";

import "./css/database.css";

import Home from "./components/Home";

const NotFound = () => <h1>404 :(</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/** Header */}
          <Navbar>
            <ul className="nav navbar-nav">
              <Link to="/" className="navbar-brand">
                AlphaZone4
              </Link>
              <li>
                <Link to="/database">
                  Database
                </Link>
              </li>
            </ul>
          </Navbar>
          {/** App body */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/database" component={DatabaseView}>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
