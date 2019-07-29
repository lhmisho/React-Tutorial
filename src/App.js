import React, { Component } from 'react';
import './App.css';

import Contact from './components/contact/Contact'
import PostForms from './components/forms/forms'

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="text-center">React form part 1</h1>  
        <PostForms />
      </div>
    );
  }
}

export default App;
