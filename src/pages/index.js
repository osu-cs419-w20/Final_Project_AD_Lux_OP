/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx, Global } from '@emotion/core';

import { useRouter } from 'next/router';

import fetch from 'isomorphic-unfetch';

import { getSummonerByName, getStatsBySummonerId, getMatchHistoryBySummonerId, getChampionMasterBySummonerId } from '../api/api';

function Home ({ data }) {
  
  const router = useRouter();
  const styles = css`
    margin: 0px;
    padding: 0px;

    width: 100%;
    height: 100%;

    img {
      z-index:-1;
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      display: block;

      /* Full height */
      height: 100%;
      width: auto;

      text-align: center;
    }
  `;

  const [test, setTest] = useState({});

  useEffect(() => {
    
  });

  async function handleClick() {
    const id = await getSummonerByName('jmanosu');
    console.log(id);
    const stats = await getStatsBySummonerId(id);
    console.log(stats);
    const matchHistory = await getMatchHistoryBySummonerId(id);
    console.log(matchHistory);
    const mastery = await getChampionMasterBySummonerId(id);
    console.log(mastery);
  }

  return (
    <div css={styles}>
      <input type="text"></input>
      <button onClick={() => handleClick()}>Search</button>
      <h1>
        this is the data:
      </h1>
    </div>
  );
}

Home.getInitialProps = async function (context) {
  let responseBody = "";
  const url = 'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-60a348f6-14e7-49a5-90d3-58e8ad446e52';
  const apiToken = "RGAPI-60a348f6-14e7-49a5-90d3-58e8ad446e52";
  const response = await fetch(url, {
    method: 'GET'
  });
  responseBody = await response.json();
  return { data: responseBody };
}

export default Home;