import React, { Component } from 'react'

export default class SummonerName extends Component {

    state = {
        accountID:'',
        profileID:'',
        summonerLevel : '',
        name: '',
        summonerID: '',
        ranks: [],
        score: 12,
        tier: '',
        divison: '',
    };



    interpretScore = () => {

        if ( 0 <=this.state.score && this.state.score <= 25 ){
            return "Tilt score: " + this.state.score + ' Tilted'
        }
        else if ( 26 <=this.state.score && this.state.score <= 75 ){
            return "Tilt score: " + this.state.score + ' Average'
        }
        else if ( 76 <=this.state.score && this.state.score <= 100 ){
            return "Tilt score: " + this.state.score + ' Reliable'
        }
        else {
            return "Tilt score: " + this.state.score + ' ???'
        }

    }
    getStyle = () =>{
        return {
            font: "sans-serif",
            fontSize: "20px",
            padding: "40px",
            align: "center",
            heigh: "20px"
        }
    }

    componentDidMount(){
        const apikey = "RGAPI-217790cf-3b00-4d53-8962-e9e775ab2cba";
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const Summonerurl = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + this.props.name + "?api_key=" + apikey;



        var result = fetch(proxyurl + Summonerurl)
        .then(response => response.json())
        .then(function(contents){
            console.log(contents)
            var accountID = contents.id
            const Leagueurl = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + accountID+ "?api_key=" + apikey;
            this.setState({accountID: contents.accountId, profileID: contents.profileIconId, summonerLevel: contents.summonerLevel, name: contents.name, summonerID: contents.id})
            return fetch(proxyurl + Leagueurl);
        }.bind(this))
        .then(function(response2){
            return response2.json()
        })
        .catch((error) => console.log(error))

        result.then(r=>

            this.setState({divison: r.filter(ladder => (ladder.queueType === "RANKED_SOLO_5x5"))[0].rank, tier: r.filter(ladder => (ladder.queueType === "RANKED_SOLO_5x5"))[0].tier})

        )


    }

    render() {

        let profileIconUrl = "https://opgg-static.akamaized.net/images/profile_icons/profileIcon" + this.state.profileID + ".jpg"
        console.log(this.state.tier)
        return(
            <div className = "newcontainer" style = {{color: "white"}} >



                <img src = {profileIconUrl} alt = "SummonerIcon" width = "25%" height = "25%" className = "centerprofile"></img>
                <h1 style= {{textAlign: "center", fontSize: "large"}}>{this.state.name} </h1>
                <h3 style= {{textAlign: "center", fontSize: "large"}}>{this.state.tier} {this.state.divison} </h3>
                <h2 style= {{textAlign: "center", fontSize: "large"}}>{this.interpretScore()}</h2>

            </div>
        )
    }
}
