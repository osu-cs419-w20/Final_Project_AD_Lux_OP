/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx, Global } from "@emotion/core";

import { useRouter } from "next/router";

function Summoner() {
  const router = useRouter();
  const [summonerName, setSummonerName] = useState("");

  return (
    <div>
      <h1>Summoner</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          router.push(`/summoner/${summonerName}`);
        }}
      >
        <input
          value={summonerName}
          onChange={e => setSummonerName(e.target.value)}
        />
        <button type="submit">Go To Summoner</button>
      </form>
    </div>
  );
}

export default Summoner;
