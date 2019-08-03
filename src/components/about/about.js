import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/about'

class About extends Component{

    state = {
      data : []
    }

    componentDidMount(){
      axios.get(`${BASE_URL}`)
          .then(res => {
            this.setState({
              data : res.data
            })
          })
          .catch(err => console.log(err))
    }

    deleteHandler = (obj) => {
    
      return () => {
        let TR = document.getElementById("row_"+obj)
        axios.delete(`${BASE_URL}/${obj}`)
          .then(res => {
            TR.remove() // removing the TR from the table
          })
          .catch(err => console.log(err))
      }
    }

    render(){
        return(
            <div className="App container">
          <h1>React final tutorial</h1>
          <h2>get data using axios</h2>
          <div className="row">
          <table className="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody id="tBody">
            {this.state.data.map(obj => {
              return(
                <tr key = { obj.id } id={"row_" + obj.id}>
                <td>{obj.name}</td>
                <td>{obj.email ? obj.email : 'N/A'}</td>
                <td>{obj.phone ? obj.phone : 'N/A'}</td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={ this.deleteHandler(obj.id).bind(this)} >Delete</button>
                </td>
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

export default About