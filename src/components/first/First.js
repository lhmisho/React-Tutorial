import React, { Component } from 'react'

class First extends Component{
    render(){
        return(
            <div>
                <p>First Name: {this.props.person.name}</p>
                <p>Email: {this.props.person.email}</p>
                <p>Phone: {this.props.person.phone}</p>
            </div>
        )
    }
}

export default First