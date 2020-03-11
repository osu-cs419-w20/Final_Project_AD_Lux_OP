/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';



  class FreeChamps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        freeChampionIds: []
      };
    }

    componentDidMount() {
      fetch("https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-217790cf-3b00-4d53-8962-e9e775ab2cba")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              freeChampionIds: result.freeChampionIds
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
      const { error, isLoaded, freeChampionIds } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {freeChampionIds.map(item => (
              <li>
                {item}
              </li>
            ))}
          </ul>
        );
      }
    }

  // return (
  //   <div>
  //       <h1>FreeToPlayChampions</h1>
  //   </div>
  // );
  }


export FreeChamps;
