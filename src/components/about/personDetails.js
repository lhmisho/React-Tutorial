import React, { Component } from 'react'
import axios from 'axios'


const BASE_URL = 'http://localhost:3000/persons'
const options = [
    { value: 'Bangladesh',  label: 'Bangladesh' },
    { value: 'India',       label: 'India' },
    { value: 'Pakistan',    label: 'Pakistan' },
];
class PersonDetails extends Component{

    state = {
        person : [],
        city: null,
        street: null,
        zip: null,
        php:false,
        python: false,
        java: false,
        javascript: false,
        c: false,
        cp: false
    }

    componentDidMount(){

        const { match: { params } } = this.props;
        axios.get(`${BASE_URL}/${params.personId}`)
            .then(res => {
                this.setState({
                    person: res.data
                })
                this.fillcheckbox(this.state.person.skills)
                this.setAddress(this.state.person.address)
                console.log(this.state.person)
            })
            .then(err => console.log(err))
    }

    // for filling checkbox value 
    fillcheckbox = (skills) => {
        skills.includes("php") ? this.setState({
            php: true
        }) : this.setState({
            php: false
        })
        skills.includes("python") ? this.setState({
            python: true
        }) : this.setState({
            python: false
        })
        skills.includes("java") ? this.setState({
            java: true
        }) : this.setState({
            java: false
        })
        skills.includes("c") ? this.setState({
            c: true
        }) : this.setState({
            c: false
        })
        skills.includes("c++") ? this.setState({
            cp: true
        }) : this.setState({
            cp: false
        })
        skills.includes("javascript") ? this.setState({
            javascript: true
        }) : this.setState({
            javascript: false
        })
    }

    // set address
    setAddress = (address) => {
        console.log(address)
        address.city != null ? this.setState({ city: address.city }) : this.setState({ city: "N/A"})
        address.street != null ? this.setState({ street: address.street }) : this.setState({ street: "N/A"})
        address.zip != null ? this.setState({ zip: address.zip }) : this.setState({ zip: "N/A"})
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
                    <label htmlFor="bio">Bio</label>
                    <textarea type="textarea" className="form-control" id="bio" name="bio" placeholder="bio" onChange={this.changeHandler} value={data.bio} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Select your country</label>
                    <select onChange={this.changeHandler} value={data.country} name="country" id="country" className="form-control">
                        {options.map(option => {
                            return <option value={option.value}>{option.label}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input onChange={this.changeHandler} defaultValue={this.state.city} type="text" id="city" name="city" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input onChange={this.changeHandler} value={this.state.street}  type="text" id="street" name="street" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Zip code</label>
                    <input onChange={this.changeHandler} value={this.state.zip} type="text" id="zip" name="zip" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender1" value="Male" onChange={ this.changeHandler } checked={data.gender === "Male" ? true : false} />
                        &nbsp;<label className="form-check-label" htmlFor="gender1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender2" value="Female" onChange={ this.changeHandler } checked={data.gender === "Female" ? true : false} />
                        &nbsp;<label className="form-check-label" htmlFor="gender2">Female</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler }  className="form-check-input" type="checkbox" id="php" value="php" checked={this.state.php} />
                                <label className="form-check-label" htmlFor="php">PHP</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } checked={this.state.python} className="form-check-input" type="checkbox" id="python" value="python" />
                                <label className="form-check-label" htmlFor="python">Python</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } value="java" checked={this.state.java} className="form-check-input" type="checkbox" id="java" />
                                <label className="form-check-label" htmlFor="java">java</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } value="c" checked={this.state.c} className="form-check-input" type="checkbox" id="c" />
                                <label className="form-check-label" htmlFor="c">c</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } value="c++" checked={this.state.cp} className="form-check-input" type="checkbox" id="c++" />
                                <label className="form-check-label" htmlFor="c++">C++</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } value="javascript" checked={this.state.javascript} className="form-check-input" type="checkbox" id="javascript" />
                                <label className="form-check-label" htmlFor="javascript">JavaScript</label>
                            </div>
                        </div>
                    </div>
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