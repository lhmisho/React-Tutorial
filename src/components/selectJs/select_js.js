import React, { Component } from 'react'
import Select from 'react-select'
import '../../../node_modules/choices.js/public/assets/styles/choices.min.css'



class SelectComp extends Component {

    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        // console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.options}
                name="country"
            />
        );
    }
}

export default SelectComp