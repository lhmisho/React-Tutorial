import React, { Component } from 'react'


class PostForms extends Component {

    state = {
        name: '',
        email: '',
        bio: '',
        password: ''
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    submitHandler = event => {
        
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" onChange={ this.changeHandler } value={this.state.value} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={ this.changeHandler } value={this.state.value} />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea type="textarea" className="form-control" id="bio" name="bio" placeholder="Enter short bio" onChange={ this.changeHandler } value={this.state.value} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={ this.changeHandler } value={this.state.value} />
                </div>

                <button className="btn btn-primary btn-sm" type="submit">Submit</button>
            </form>
        )
    }


}

export default PostForms