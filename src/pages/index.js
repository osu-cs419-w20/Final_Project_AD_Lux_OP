/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

import { useRouter } from 'next/router';

function Home() {
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

  const router = useRouter();

  return (
    <div css={styles}>
      <img src="https://images.wallpapersden.com/image/download/camille-league-of-legends_68170_1920x1133.jpg"/>
      <input type="text"></input>
      <button onClick={() => router.push('/summoner')}>Search</button>
    </div>
  );
}

export default Home;