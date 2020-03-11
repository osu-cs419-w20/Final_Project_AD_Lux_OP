/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx, Global } from "@emotion/core";

import { useRouter } from "next/router";
import LeagueJS from "leaguejs";

const leagueJs = new LeagueJS("RGAPI-02b0bd0d-0bca-49ae-bf3c-ae0cedf2f7de");

function Summoner() {
  leagueJs.Summoner.gettingByName("EldoranDev")
    .then(data => {
      "use strict";
      console.log(data);
    })
    .catch(err => {
      "use strict";
      console.log(err);
    });

  leagueJs.Summoner.gettingByAccount(22177292, "euw")
    .then(data => {
      "use strict";
      console.log(data);
    })
    .catch(err => {
      "use strict";
      console.log(err);
    });
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
