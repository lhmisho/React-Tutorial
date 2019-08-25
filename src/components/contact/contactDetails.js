import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/contacts'

class ContactDetails extends Component {


    state = {
        data: {},
        street: null,
        city: null,
        zipcode: null,
    }

    componentDidMount() {

        const { match: { params } } = this.props;
        axios.get(`${BASE_URL}/${params.contactId}`)
            .then(res => {
                this.setState({
                    data: res.data
                })
                this.setAddress(this.state.data.address)
                console.log(this.state.data)
            })
            .catch(err => console.log(err))

    }
    changeHandler = (event) => {
        if (event.target.name === 'name') {
            this.setState({
                ...this.state.data,
                data: Object.assign(this.state.data, { name: event.target.value })
            })
        } else if (event.target.name === 'email') {
            this.setState({
                ...this.state.data,
                data: Object.assign(this.state.data, { email: event.target.value })
            })
        } else if (event.target.name === 'username') {
            this.setState({
                ...this.state.data,
                data: Object.assign(this.state.data, { username: event.target.value })
            })
        }else if(event.target.name === 'phone') {
            this.setState({
                ...this.state.data,
                data: Object.assign(this.state.data, {phone: event.target.value})
            })
        }else if(event.target.name === 'street'){
            this.setState({
                address: Object.assign(this.state.data.address, {street: event.target.value})
            })
        }else if(event.target.name === 'city'){
            this.setState({
                address: Object.assign(this.state.data.address, {city: event.target.value})
            })
        }else if(event.target.name === 'zipcode'){
            this.setState({
                address: Object.assign(this.state.data.address, {zipcode: event.target.value})
            })
        }
    }

    // set default address
    setAddress = (address) => {
        console.log(address.zipcode.length !== 0)
        address.city.length !== 0 ? this.setState({ city: address.city }) : this.setState({ city: "N/A" })
        address.street.length !== 0 ? this.setState({ street: address.street }) : this.setState({ street: "N/A" })
        address.zipcode.length !== 0 ? this.setState({ zipcode: address.zipcode }) : this.setState({ zipcode: "N/A" })
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.put(`${BASE_URL}/${this.state.data.id}`, this.state.data)
            .then(res => {
                alert("successfully update userID" + this.state.data.id)
            })
            .catch(err => console.log(err))
        console.log(this.state.data.id)
    }
    render() {
        let data = this.state.data
        return (
            <form onSubmit={this.submitHandler}>
                <div className="from-row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="name">Name</label>
                        <input type="text" defaultValue={data.name} onChange={this.changeHandler.bind(this)} className="form-control" id="name" name="name" placeholder="Enter name" />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="email">Email address</label>
                        <input type="email" onChange={this.changeHandler} defaultValue={data.email} className="form-control" id="email" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={this.changeHandler} defaultValue={data.username} className="form-control" id="username" name="username" placeholder="username" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" onChange={this.changeHandler} defaultValue={data.phone} className="form-control" id="phone" name="phone" placeholder="phone" />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="website">Website</label>
                        <input type="text" onChange={this.changeHandler} defaultValue={data.website} className="form-control" id="website" name="website" placeholder="Enter website address" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="street">Street</label>
                        <input type="text" defaultValue={this.state.street} onChange={this.changeHandler.bind(this)} name="street" id="street" className="form-control" placeholder="Enter Street" />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="city">City</label>
                        <input type="text" defaultValue={this.state.city} onChange={this.changeHandler.bind(this)} name="city" id="city" className="form-control" placeholder="Enter City" />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="zipcode">Zip/Postal</label>
                        <input type="text" defaultValue={this.state.zipcode} onChange={this.changeHandler.bind(this)} name="zipcode" id="zipcode" className="form-control" placeholder="Enter Zip code" />
                    </div>
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