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
  getChampionInfoById,
  getChampionInfoByName,
  getChampionFullImageUrlByName,
  getChampionFullImageUrlById
} from "../api/api";

const styles = css`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: auto;


  h1 {
    text-align: center;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  label {
    margin: auto;
    padding: 15px 30px;
    text-align: center;
    display: block;
    color: white;
  }

  input {
    width: 200px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url("searchicon.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px;
    transition: width 0.4s ease-in-out;
    margin: auto;
    display: block;
    border-radius: 10px;
  }

  input:focus {
    width: 50%;
  }

  a {
    margin-top: 10px;
    color: white;
    display: block;
    text-align: center;
  }

  button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: auto;
    margin-top: 10px;
    border-radius: 10px;
  }

  .Error {
    color: red;
    font-size: 13px;
    text-align: center;
  }
`;

const title = css`
  color: white;
`;

export default function Home({ data }) {
  const router = useRouter();
  const query = router.query.q;
  const [summonerName, setSummonerName] = useState("");
  const [error, setError] = useState(false);

  async function getSummonerID(summonerName) {
    const responseBody = await getSummonerByName(summonerName);
    if (responseBody && responseBody.id) {
      router.push(`/summoner/${responseBody.id}`);
    } else {
      setError(true);
    }
  }

  return (
    <div css={styles}>
      <img src="https://i.pinimg.com/originals/d7/4a/c7/d74ac7338668caa0cbbbc85a06dfd24f.png" />
      <form
        onSubmit={e => {
          e.preventDefault();
          getSummonerID(summonerName);
        }}
      >
        <input
          placeholder="Search summoner name"
          value={summonerName}
          onChange={e => setSummonerName(e.target.value)}
        />
        { error && <h2 className={'Error'}>Summoner name invalid</h2> }
        <button type="submit">Search</button>
        <a href="/free-champions">Free Champions</a>
      </form>
    </div>
  );
}
