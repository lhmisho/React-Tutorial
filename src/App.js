import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Contact from './components/contact/Contact'
import PostForms from './components/forms/forms'
import Home from './components/home/home'
import Person from "./components/about/about";
import ContactDetails from './components/contact/contactDetails'
import Nav from './components/nav/nav'
import LifeCycle from './components/life_cycle/life-cycle'
class App extends Component {

  render() {

    let navElements = {
      contact   : Contact,
      postForm  : PostForms,
      home      : Home,
      about     : Person,
      contactDetails : ContactDetails,

    }

    return (
      // <Nav navElements = { navElements } />
      <LifeCycle />
    );
  }
}

export default App;
