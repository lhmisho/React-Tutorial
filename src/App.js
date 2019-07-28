import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component{
  
  

  state = {
    contacts : []
  }
  
  componentDidMount(){
    axios.get('http://localhost:3000/contacts')
        .then(res => {
          this.setState({
            contacts : res.data
          })
        })
        .catch(err => console.log(err))
  }

  render(){
    if(this.state.contacts.length === 0){
      return <h1>loading .....</h1>
    }else{
      return(
        <div className="App container">
          <h1>React final tutorial</h1>
          <h2>get data using axios</h2>
          <div className="row">
          <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => {
              return(
                <tr key = { contact.id }>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      </div>
      );
    }
  }
}

export default App;
