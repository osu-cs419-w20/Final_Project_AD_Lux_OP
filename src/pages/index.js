/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx, Global } from "@emotion/core";

import { useRouter } from "next/router";

function Home() {
  const styles = css`
    margin: 0px;
    padding: 0px;

    width: 100%;
    height: 100%;

    img {
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;

      /* Full height */
      height: 100%;
      width: auto;

      text-align: center;
    }
  `;

  const router = useRouter();
  const [summonerName, setSummonerName] = useState("");

  return (
    <div>
      <div css={styles}>
        <img src="https://images.wallpapersden.com/image/download/camille-league-of-legends_68170_1920x1133.jpg" />
      </div>
      <h1>Summoner</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          router.push(`/summoner/${summonerName}`);
        }}
      >
        <input
          value={summonerName}
          onChange={e => setSummonerName(e.target.value)}
        />
        <button type="submit">Go To Summoner</button>
      </form>
    </div>
  );
}

export default Home;
