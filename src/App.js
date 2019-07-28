import React from 'react';
import logo from './logo.svg';
import './App.css';

import First from './components/first/First'

let person = {
  name  : 'Misho',
  email : 'lhmisho@gmail.com',
  phone : '01685634198'
}

function App() {
  
  return (
    <div className="App">
      <h1>React final tutorial</h1>
      <First person={person}/>
    </div>
  );
}

export default App;
