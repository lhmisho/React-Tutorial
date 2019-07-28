import React, { Component } from 'react'
import { directive } from '@babel/types';

class Counter extends Component{

    constructor(props){
        super(props)

        this.state = {
            count : 10,
            color : 'black'
        }
    }
    decrease = () => {
        this.setState({
            count : this.state.count - 1
        })
        if(this.state.count <= 5){
            this.setState({
                color : 'red'
            })
        }else if(this.setState.count >= 15){
            this.setState({
                color : 'green'
            })
        }else{
            this.setState({
                color : 'black'
            })
        }
    }

    increase = () => {
        this.setState({
            count : this.state.count + 1
        })
        if(this.state.count <= 5){
            this.setState({
                color : 'red'
            })
        }else if(this.state.count >= 15){
            this.setState({
                color : 'green'
            })
        }else{
            this.setState({
                color : 'black'
            })
        }
    }
    render(){
        return(
            <div style={{color:this.state.color}}>
                <h1> 
                    <span onClick={ this.decrease }>-</span>
                    <span>{this.state.count}</span>
                    <span onClick={ this.increase }>+</span>
                </h1>
            </div>
        )
    }
}

export default Counter
