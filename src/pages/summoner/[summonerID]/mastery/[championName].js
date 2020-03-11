/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from 'next/router';

function ChampionMastery() {
  const router = useRouter();
  const {summonerID, championName} = router.query;

  return (
    <div>
        <h1>Mastery of summoner with ID: {summonerID}</h1> 
  <h2>Looking at championName {championName}</h2>   
    </div>
  );
}

export default ChampionMastery;