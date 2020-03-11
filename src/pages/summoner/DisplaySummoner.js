import React, { Component } from 'react'
import SummonerName from './SummonerName';


export default class DisplaySummoner extends Component {

    render() {
        
        return (
            <div>
                <SummonerName name = {(JSON.parse(localStorage.getItem("List")))[0].title}></SummonerName>

            </div>
        )
    }
}
