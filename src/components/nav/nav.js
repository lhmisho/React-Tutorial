import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import ContactDetails from '../contact/contactDetails'

class Nav extends Component{
    render(){

      console.log(this.props)
        return(
            <div>
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
              <li>
                <Link to="/about-list/">About List</Link>
              </li>
              <li>
                <Link to="/contact-details/">Contact Details</Link>
              </li>
            </ul>
          </nav>
          <h2>React router crush course</h2>
          <Switch>
            <Route path="/" exact component={ this.props.navElements.home } />
            <Route path="/contact-list/" component={ this.props.navElements.contact } />
            <Route path="/add-about/" component={ this.props.navElements.postForm} />
            <Route path="/about-list/" component={this.props.navElements.about} />

            <Route path="/contact-details/" component={ContactDetails} />
            
          </Switch>
        </div>
      </Router>
            </div>
        )
    }
}

export default Nav