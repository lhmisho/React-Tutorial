import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Contact from './components/contact/Contact'
import PostForms from './components/forms/forms'
import Home from './components/home/home'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact-list/">Contact List</Link>
              </li>
              <li>
                <Link to="/add-about/">Add About</Link>
              </li>
            </ul>
          </nav>
          <h2>React router crush course</h2>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact-list/" component={Contact} />
            <Route path="/add-about/" component={PostForms} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
