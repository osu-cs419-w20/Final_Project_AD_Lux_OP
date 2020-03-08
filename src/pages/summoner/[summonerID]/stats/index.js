/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from 'next/router';

function Stats() {
  const router = useRouter();
  const { summonerID } = router.query;

  return (
    <div>
        <h1>Stats of summoner with ID: { summonerID }</h1>
        <button onClick={() => router.push(`${router.asPath}/match-history`)}>To match-history</button>  
    </div>
  );
}

export default Stats;