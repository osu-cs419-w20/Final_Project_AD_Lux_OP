/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from  'next/router';

function MatchHistory() {
  const router = useRouter();
  const { summonerID } = router.query;

  return (
    <div>
        <h1>Match History with summoenrID: {summonerID}</h1>    
    </div>
  );
}

export default MatchHistory;