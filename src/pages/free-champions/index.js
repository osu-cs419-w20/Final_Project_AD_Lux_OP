/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

async function getChampName(id) {
  const championInfo = "http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/champion.json"
    var result = await fetch(championInfo);
    
    const responseBody = await result;
    console.log(result);
    // .then(function(contents){
    //   for(var i = 0; i < contents.length; i++){
    //     console.log(contents[i].key);
    //     if(id === contents[i].key){
    //       return contents[i].name
    //     }
    //   }
    // })
}

export default class FreeChamps extends React.Component {
  state = {
    freeChampionIds: [],
    championIcon: [],
   };

  componentDidMount() {
    var api_key = "RGAPI-20b21fea-e08a-4a25-abad-a6fa7a0265c1";
    const proxyurl = "https://league-proxy.herokuapp.com/";
    const championURL = "lol/platform/v3/champion-rotations" + "?api_key=" + api_key;

    var result = fetch(proxyurl + championURL)
    .then(response => response.json())
    .then(function(contents){
      console.log(contents)
      this.setState({freeChampionIds: contents.freeChampionIds})
      for(var i in contents.freeChampionIds){
        this.setState({championIcon: getChampName(contents.freeChampionIds[i])})
      }
      console.log(getChampName(8));
      console.log(this.state.championIcon);
      return result;
    }.bind(this))
    .then(function(response2){
      return response2.json()
    })
    .catch((error) => console.log(error))
  }

  render() {
    return (
      <ul>
        {this.state.freeChampionIds.map(freeChampionIds => <li>{freeChampionIds}</li>)}
      </ul>
    );
  }
}
