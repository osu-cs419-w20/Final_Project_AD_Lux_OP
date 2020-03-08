/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

import { useRouter } from 'next/router';

function Summoner() {
  const router = useRouter();

  return (
    <div>
        <h1>Summoner</h1>
        <button onClick={() => router.push('/summoner/12837912873')}>Go to Summoner 12837912873</button>
    </div>
  );
}

export default Summoner;