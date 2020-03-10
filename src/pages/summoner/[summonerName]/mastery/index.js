/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from 'next/router';

function Mastery() {
  const router = useRouter();
  const {summonerID} = router.query;

  return (
    <div>
        <h1>Mastery of summoner with ID: {summonerID}</h1>    
    </div>
  );
}

export default Mastery;