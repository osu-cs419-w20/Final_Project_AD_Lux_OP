import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddSummoner extends Component {
    state ={
        title: '',

    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addSummoner(this.state.title);
        this.setState({title: ''})
        this.setState({currentsummoner: ''})
        
    }


    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display: 'flex'}}>
                <input
                type = "text" 
                placeholder = 'Enter A Summoner name' 
                name = 'title'
                style = {{flex: '10', padding: '5px'}}
                value = {this.state.title}
                onChange = {this.onChange}
                >
                </input>
                <input
                type = 'submit'
                value = 'Submit'
                className = 'btn'
                style = {{flex: '1'}}
                >
                
                </input>
            </form>
        )
    }
}

AddSummoner.propTypes = {
    addSummoner: PropTypes.func.isRequired
}

export default AddSummoner
