import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/contacts'

class ContactDetails extends Component{


    state = {
        data : []
    }

    componentDidMount(){

        const { match: { params } } = this.props;
        axios.get(`${BASE_URL}/${params.contactId}`)
            .then(res => {
                this.setState({
                    data: res.data
                })
                console.log(this.state.data)
            })
            .catch(err => console.log(err))
    }

    changeHandler = () =>{
        
    }
    submitHandler = () =>{

    }
    render(){
        const  data  = this.state.data
        return(
            <form ref={this.myForm} onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" onChange={this.changeHandler} value={data.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={this.changeHandler} value={data.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="username" onChange={this.changeHandler} value={data.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" placeholder="phone" onChange={this.changeHandler} value={data.phone} />
                </div>
                <br></br>
                <div className="form-group">
                    <button className="btn btn-primary btn-sm" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default ContactDetails