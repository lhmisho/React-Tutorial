import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/persons'

class PersonDetails extends Component{

    state = {
        person : []
    }

    componentDidMount(){

        const { match: { params } } = this.props;
        axios.get(`${BASE_URL}/${params.personId}`)
            .then(res => {
                this.setState({
                    person: res.data
                })
                console.log(this.state.person)
            })
            .then(err => console.log(err))
    }

    changeHandler = (event) =>{
        console.log(event)
    }
    submitHandler = (event) =>{
        console.log(event)        
    }
    render(){

        let  data  = this.state.person
        return(
            <div>
            <p>Person details</p>
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" defaultValue={data.name} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={this.changeHandler} defaultValue={data.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Username</label>
                    <textarea type="textarea" className="form-control" id="bio" name="bio" placeholder="bio" onChange={this.changeHandler} defaultValue={data.bio} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" placeholder="phone" onChange={this.changeHandler} defaultValue={data.phone} />
                </div>
                <br></br>
                <div className="form-group">
                    <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}

export default PersonDetails