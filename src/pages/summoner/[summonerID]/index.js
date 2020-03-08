/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from 'next/router';

function Summoner() {
  const router = useRouter();
  const { summonerID } = router.query;

  return (
    <div>
        <h1>Summoner with id: {summonerID}</h1>
        <button onClick={() => router.push(`${router.asPath}/mastery`)}>to Masteries</button>
        <button onClick={() => router.push(`${router.asPath}/stats`)}>to Stats</button>
    </div>
  );
}

export default Summoner;