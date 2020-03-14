/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import { useRouter } from "next/router";
import SummonerStats from "../../../components/SummonerStats";
import Spinner from "../../../components/Spinner";

function Summoner() {
  const router = useRouter();
  const { summonerID } = router.query;
  const [rankedFlexStats, setRankedFlexStats] = useState({});
  const [rankedSoloDuoStats, setRankedSoloDuoStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (summonerID) {
      async function getSummonerStats() {
        const url = `https://league-proxy.herokuapp.com/lol/league/v4/entries/by-summoner/${summonerID}?api_key=RGAPI-676a41fd-4840-4883-a548-72b432302ed9`;
        const response = await fetch(url, {
          method: "GET"
        });
        if (response) {
          const responseBody = await response.json();
          console.log("RESPONSE!");
          console.log(responseBody);
          if (responseBody[0]) {
            console.log("has flex stats");
            console.log(responseBody[0]);
            setRankedFlexStats(responseBody[0]);
          }
          if (responseBody[1]) {
            console.log("has soloduo stats");
            console.log(responseBody[1]);
            setRankedSoloDuoStats(responseBody[1]);
          }
          setIsLoading(false);
        }
      }
      getSummonerStats();
    }
  }, [summonerID]);

  return (
    <div>
      <h1>Summoner with id: {summonerID}</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <SummonerStats
          flexStats={rankedFlexStats ? rankedFlexStats : null}
          soloDuoStats={rankedSoloDuoStats ? rankedSoloDuoStats : null}
        />
      )}
      <button onClick={() => router.push(`${router.asPath}/mastery`)}>
        to Masteries
      </button>
    </div>
  );
}

export default Summoner;
