import React, { Component } from 'react'
import axios from 'axios'
import { declareTypeAlias } from '@babel/types';

const BASE_URL = 'http://localhost:3000/contacts'

class ContactDetails extends Component{

    state = {
        data : []
    }
    componentDidMount(){
        console.log(this.props)
        axios.get(`${BASE_URL}/${this.props.contactId}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default ContactDetails