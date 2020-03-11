/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

import { useRouter } from 'next/router';

import fetch from 'isomorphic-unfetch';

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

  async function handleClick() {
    router.push('/summoner')
  }

  console.log(data);

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
  console.log("quering for champions")
  const url = 'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-a3fce233-6c1f-4697-85c9-757a0cad7a7e';
  const apiToken = "RGAPI-a3fce233-6c1f-4697-85c9-757a0cad7a7e";
  const response = await fetch(url, {
    method: 'GET'
  });
  responseBody = await response.json();
  return { data: responseBody };
}

export default Home;