/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

import Layout from '../components/layout';

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

  return (
    <Layout>
      <div css={styles}>
        <img src="https://images.wallpapersden.com/image/download/camille-league-of-legends_68170_1920x1133.jpg"/>
        <input type="text"></input>
        <button>Search</button>
      </div>
    </Layout>
  );
}

export default Home;