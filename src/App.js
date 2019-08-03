import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Contact from './components/contact/Contact'
import PostForms from './components/forms/forms'
import Home from './components/home/home'
import About from './components/about/about'
import ContactDetails from './components/contact/contactDetails'
import Nav from './components/nav/nav'

class App extends Component {

  render() {

    let navElements = {
      contact   : Contact,
      postForm  : PostForms,
      home      : Home,
      about     : About,
      contactDetails : ContactDetails,

    }

    return (
      <Nav navElements = { navElements } />
    );
  }
}

export default App;
