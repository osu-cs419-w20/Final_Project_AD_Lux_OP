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
  }

  input {
    width: 200px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url('searchicon.png');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px;
    transition: width 0.4s ease-in-out;
    margin: auto;
    display: block;
  }

  input:focus{
    width:100%;
  }

  ul {
    list-style-type: none;
    margin: auto;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    border: 1px solid #555;
    display: block;
  }

  li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  li {
    text-align: center;
    border-bottom: 1px solid #555;
  }

  li:last-child {
    border-bottom: none;
  }


  button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: auto;
    margin-top: 10px;
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
      <ul><li><a href="/free-champions">Free Champion</a></li></ul>
      <img src="https://i.pinimg.com/originals/d7/4a/c7/d74ac7338668caa0cbbbc85a06dfd24f.png"/>
      <form
        onSubmit={e => {
          e.preventDefault();
          getSummonerID(summonerName);
          // router.push(`/summoner/${summonerID}`);
        }}
      >
        <label>Summoner Name</label>
        <input
          placeholder="Search summoner name"
          value={summonerName}
          onChange={e => setSummonerName(e.target.value)}
        />
        <button type="submit">Search</button>

      </form>
    </div>
  );
}
