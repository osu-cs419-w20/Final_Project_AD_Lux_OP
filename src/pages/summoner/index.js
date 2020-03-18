/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

import { useRouter } from 'next/router';

function Summoner() {
  const router = useRouter();

  return (
    <div>
      <h1 css={css`color: red; text-align: center;`}>ERROR Summoner Not Found</h1>
    </div>
  );
}

export default Summoner;