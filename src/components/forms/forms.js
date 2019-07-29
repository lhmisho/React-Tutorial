import React, { Component } from 'react'


const initialState = {
    name: '',
    email: '',
    password: '',
    bio: '',
    country: '',
    gender: '',
    skills: []
}

class PostForms extends Component {

    constructor() {
        super()

        this.myForm = React.createRef()
    }

    state = initialState

    changeHandler = (event) => {
        if(event.target.type === 'checkbox'){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            }else{
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill != event.target.value)
                })
            }
        }else{
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    };

    submitHandler = event => {

        event.preventDefault();
        console.log(this.state)

        this.myForm.current.reset()

        this.setState({
            ...initialState
        })
    }

    render() {
        return (
            <form ref={this.myForm} onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" onChange={this.changeHandler} value={this.state.value} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={this.changeHandler} value={this.state.value} />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea type="textarea" className="form-control" id="bio" name="bio" placeholder="Enter short bio" onChange={this.changeHandler} value={this.state.value} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.changeHandler} value={this.state.value} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Select your country</label>
                    <select onChange={this.changeHandler} name="country" id="country" className="form-control">
                        <option value="">--country--</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender1" value="Male" onChange={ this.changeHandler }/>
                        &nbsp;<label className="form-check-label" htmlFor="gender1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender2" value="Female" onChange={ this.changeHandler } />
                        &nbsp;<label className="form-check-label" htmlFor="gender2">Female</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <div className="col-md-12">
                        <div className="col-md-4">
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } className="form-check-input" type="checkbox" id="php" value="php" />
                                <label className="form-check-label" htmlFor="php">PHP</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } className="form-check-input" type="checkbox" id="python" value="python" />
                                <label className="form-check-label" htmlFor="python">Python</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } className="form-check-input" type="checkbox" id="java" value="java" />
                                <label className="form-check-label" htmlFor="java">java</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } className="form-check-input" type="checkbox" id="c" value="c" />
                                <label className="form-check-label" htmlFor="c">c</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } className="form-check-input" type="checkbox" id="c++" value="c++" />
                                <label className="form-check-label" htmlFor="c++">C++</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input name="skills" onChange={ this.changeHandler } className="form-check-input" type="checkbox" id="javascript" value="javascript" />
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
        )
    }


}

export default PostForms