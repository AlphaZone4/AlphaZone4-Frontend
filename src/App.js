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
// Redux
import { Provider } from 'react-redux'

import "./css/database.css";

import Home from "./components/Home";
import DatabaseView from "./containers/DatabaseView";

import configureStore from './configureStore';
const store = configureStore();

const NotFound = () => <h1>404 :(</h1>

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

// DEBUG - kick off a database get
import { updateProjects } from './actions'
store.dispatch(updateProjects())/**.then(() =>
  console.log(store.getState())
)*/

export default App;
