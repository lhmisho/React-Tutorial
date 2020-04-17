import React from 'react'


class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        console.log("LCD - Constructor")
    }
    componentWillMount(){
        console.log("LCD component will mount")
    }
    static getDerivedStateFromProps(){
        console.log("LCD getDerivedStateFromProps")
    }
    componentDidMount(){
        console.log("LCD - Component did mount")
    }
    componentDidUpdate(){
        console.log("LCD - Component did update")
    }
    render(){
        console.log("LCD - RENDER")
        return(
            <div>
                <h1>Life cycle method</h1>
            </div>
        )
    }
}

export default LifeCycle