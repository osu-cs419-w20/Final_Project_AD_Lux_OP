import React, { Component } from 'react';
import PropTypes from 'prop-types';



class SummonerItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }
    getButtonStyle = () => {
        return {
            background: "none",
            border: 'none',
        }

    }

    onClickEvent = (e) => {
        e.preventDefault();
        this.props.addSummoner(this.title);
        this.setState({title: ''})
        this.setState({currentsummoner: ''})
    }
   

    render() {
        const {id,title} = this.props.summoner;
        return (
            <div style = {this.getStyle()}>
                
               <p>
                <span onClick = {this.props.isDeleted.bind(this,id)} >x</span>
                <button style = {this.getButtonStyle()} className = "link" onClick = {this.props.addSummoner.bind(this,title)} >{title}</button>
               </p> 
            </div>
        )
    }
}
//PropTypes
SummonerItem.propTypes = {
    summoner: PropTypes.object.isRequired,
    isDeleted: PropTypes.func.isRequired,
    addSummoner: PropTypes.func.isRequired, 
}



export default SummonerItem;
