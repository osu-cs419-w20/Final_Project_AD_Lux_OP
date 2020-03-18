/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";

import Spinner from "../../components/Spinner";
import { getChampionRotation } from "../../api/api";
import ChampionList from '../../components/championList';

const styles = css`
  margin-left: 60px;
  margin-right: 60px;
  padding: auto;
  display: block;
  justify-content: center;
  flex-direction: column
  overflow: auto;
`;

const labelStyle = css`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const backButtonStyle = css`
  margin-top: 70px;
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
`;

function free_champion() {
  const router = useRouter();
  const [mFreeChampions, setMFreeChampions] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFreeChampions() {
      let freeChampions = await getChampionRotation();
      if (freeChampions) {
        setMFreeChampions(freeChampions);
        setLoading(false);
        console.log(freeChampions);
      }
    }
    getFreeChampions();
  }, []);

  return(
    <div css={styles}>
      <div css={css``}>
        <button css={backButtonStyle} onClick={() => {router.push('/')}}>Back</button>
      </div>
      {
      loading ? <Spinner/> :
        <div>
          <h2 css={labelStyle}>Free Champions</h2>
          <ChampionList champions={mFreeChampions.freeChampionIds}/>
          <h2 css={labelStyle}>Free Champions For New Players</h2>
          <ChampionList champions={mFreeChampions.freeChampionIdsForNewPlayers}/>
        </div>
      }
    </div>
  );
}

export default free_champion;
