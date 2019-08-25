import React, { Component } from 'react'
import axios from 'axios'


const BASE_URL = 'http://localhost:3000/persons'
const options = [
    { value: 'Bangladesh',  label: 'Bangladesh' },
    { value: 'India',       label: 'India' },
    { value: 'Pakistan',    label: 'Pakistan' },
];
class PersonDetails extends Component{

    constructor(props){
        super(props)

        this.myForm = React.createRef()
    }

    state = {
        person : {},
        city: null,
        street: null,
        zip: null,
    }

    componentDidMount(){

        const { match: { params } } = this.props;
        axios.get(`${BASE_URL}/${params.personId}`)
            .then(res => {
                this.setState({
                    person: res.data
                })
                this.setAddress(this.state.person.address)
                console.log(this.state.person)
            })
            .then(err => console.log(err))
    }

    // set address
    setAddress = (address) => {
        address.city !== null ? this.setState({ city: address.city }) : this.setState({ city: "N/A"})
        address.street !== null ? this.setState({ street: address.street }) : this.setState({ street: "N/A"})
        address.zip !== null ? this.setState({ zip: address.zip }) : this.setState({ zip: "N/A"})
    }

    changeHandler = (event) =>{
        // console.log(event.target.name)
        if(event.target.type === 'checkbox'){
            if(event.target.checked){
                let changed = {
                    person: {
                        ...this.state.person,
                        skills: this.state.person.skills.concat(event.target.value) // saving array elements
                    }
                } 
                this.setState(changed)
            }else{
                let changed = {
                    person: {
                        ...this.state.person,
                        skills: this.state.person.skills.filter(skill => skill !== event.target.value) // saving array elements
                    }
                } 
                this.setState(changed)
            }
        }else if(event.target.name === 'name'){
            this.setState({
                name: Object.assign(this.state.person, {name: event.target.value})
            })
        }else if(event.target.name === 'email'){
            this.setState({
                country: Object.assign(this.state.person, {email: event.target.value})
            })
        }else if(event.target.name === 'bio'){
            this.setState({
                country: Object.assign(this.state.person, {bio: event.target.value})
            })
        }else if(event.target.name === 'country'){
            this.setState({
                country: Object.assign(this.state.person, {country: event.target.value})
            })
        }else if(event.target.name === 'gender'){
            this.setState({
                gender: Object.assign(this.state.person, {gender: event.target.value})
            })
        } else if(event.target.name === 'city'){
            this.setState({
                address: Object.assign(this.state.person.address, {city: event.target.value}) // saving nested elements
            })
        } else if(event.target.name === 'street'){
            this.setState({
                address: Object.assign(this.state.person.address, {street: event.target.value})
            })
        } else if(event.target.name === 'zip'){
            this.setState({
                address: Object.assign(this.state.person.address, {zip: event.target.value})
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    submitHandler = (event) =>{
        event.preventDefault();
        console.log(this.state.person)
        axios.put(`${BASE_URL}/${this.state.person.id}`, {...this.state.person})
            .then(res => {
                alert("data successfully added")
            })
            .catch(err => console.log(err))      
    }
    render(){

        let  data  = this.state.person
        const skills = ['Python','PHP', 'Javascript', 'Java', 'C', 'C++']
        const skillsCheckboxes = skills.map((item, idx) => {
            const itemValue = item.toLowerCase()
            const selected = typeof data.skills !== 'undefined' && data.skills.includes(itemValue)
            return (
                <div className="col-md-4" key={`sk_${idx}`}>
                    <div className="form-check form-check-inline">
                        <input name="skills" onChange={ this.changeHandler } value={itemValue} checked={selected} className="form-check-input" type="checkbox" id={item} />
                        <label className="form-check-label" htmlFor={item}>{item}</label>
                    </div>
                </div>
            )
        })

        return(
            <div>
            <p>Person details</p>
            <form ref={this.myForm} onSubmit={this.submitHandler}>
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
                    <select onChange={this.changeHandler.bind(this)} value={data.country} name="country" id="country" className="form-control">
                        <option>--select country--</option>
                        {options.map(option => {
                            return <option key={option.value} value={option.value}>{option.label}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input onChange={this.changeHandler} defaultValue={this.state.city} type="text" id="city" name="city" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input onChange={this.changeHandler} defaultValue={this.state.street}  type="text" id="street" name="street" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="zip">Zip code</label>
                    <input onChange={this.changeHandler} defaultValue={this.state.zip} type="text" id="zip" name="zip" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender1" value="Male" checked={data.gender === "Male"} onChange={ this.changeHandler }/>
                        &nbsp;<label className="form-check-label" htmlFor="gender1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender2" value="Female" checked={data.gender === "Female"}  onChange={ this.changeHandler }/>
                        &nbsp;<label className="form-check-label" htmlFor="gender2">Female</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <div className="col-md-12">
                        { skillsCheckboxes }
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