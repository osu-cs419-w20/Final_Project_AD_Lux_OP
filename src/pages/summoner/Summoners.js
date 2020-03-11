import React from 'react';
import SummonerItem from './SummonerItem';
import PropTypes from 'prop-types';

class Summoners extends React.Component {
    
    
    
    render() {
        if(this.props.summoners === null){
            return (
                <div>
                </div>
            )
        }
        
        return this.props.summoners.map(summoner  => (
            <SummonerItem key = {summoner.id} summoner = {summoner} isDeleted = {this.props.isDeleted} addSummoner = {this.props.addSummoner}></SummonerItem>
        ));
    } 
}

//PropTypes
Summoners.propTypes = {
    summoners: PropTypes.array.isRequired,
    isDeleted: PropTypes.func.isRequired,
    addSummoner: PropTypes.func.isRequired,
    
}

export default Summoners;
