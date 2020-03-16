/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import { useRouter, Router } from "next/router";
import fetch from "isomorphic-unfetch";
import {
  getSummonerByName,
  getStatsBySummonerId,
  getMatchHistoryBySummonerId,
  getChampionMasterBySummonerId,
  getChampionInfo,
  getChampionFullImageUrl
} from "../api/api";

const styles = css`
  margin: 0px;
  padding: 0px;

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

export default function Home({ data }) {
  const router = useRouter();
  const query = router.query.q;
  const [summonerName, setSummonerName] = useState("");

  async function getSummonerID(summonerName) {
    const responseBody = await getSummonerByName(summonerName);
    if (responseBody) {
      router.push(`/summoner/${responseBody.id}`);
    }
  }

  return (
    <div css={styles}>
      <h1>AD LUX OP</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          getSummonerID(summonerName);
          // router.push(`/summoner/${summonerID}`);
        }}
      >
        <input
          value={summonerName}
          onChange={e => setSummonerName(e.target.value)}
        />
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}
