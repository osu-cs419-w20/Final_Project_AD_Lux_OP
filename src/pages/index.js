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

export default Home;