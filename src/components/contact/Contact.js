import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const BASE_URL = 'http://localhost:3000/contacts'

class Contact extends Component {

  state = {
    contacts: [],
    contactId: null
  }

  componentDidMount() {
    axios.get(`${BASE_URL}`)
      .then(res => {
        this.setState({
          contacts: res.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteHandler = (contact) => {

    return () => {
      let TR = document.getElementById("row_" + contact)
      axios.delete(`${BASE_URL}/${contact}`)
        .then(res => {
          TR.remove() // removing the TR from the table
        })
        .catch(err => console.log(err))
    }
  }

  render() {

    // const ContactDetailsPage = (props) => {
    //   console.log(props)
    //   return <ContactDetails contactId={props.match.params.id} />
    // }

    return (
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
              {this.state.contacts.map(contact => {
                return (
                  <tr key={contact.id} id={"row_" + contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <button className="btn btn-warning btn-sm" onClick={this.deleteHandler(contact.id).bind(this)} >Delete</button>
                      {/* <Router> */}
                        <button className="btn btn-danger btn-sm"><Link to={`/contactDetails/${contact.id}`}>Edit</Link></button>
                      {/* </Router> */}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div >
    );
  }
}

export default Contact