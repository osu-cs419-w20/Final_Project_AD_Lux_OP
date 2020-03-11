/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import { useRouter } from "next/router";

function Stats() {
  const router = useRouter();
  const { summonerName } = router.query;
  const [stats, setStats] = useState("");
  // const leagueJs = new LeagueJS("RGAPI-02b0bd0d-0bca-49ae-bf3c-ae0cedf2f7de");

  useEffect(() => {
    if (summonerName) {
      async function fetchSearchResults() {
        let responseBody = {};
        // setLoading(true);
        try {
          const response = await fetch(
            `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-02b0bd0d-0bca-49ae-bf3c-ae0cedf2f7de`,
            {
              headers: {
                Origin: "https://developer.riotgames.com",
                "Access-Control-Allow-Origin": "*",
                "Accept-Charset":
                  "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": "RGAPI-02b0bd0d-0bca-49ae-bf3c-ae0cedf2f7de",
                "Accept-Language": "en-US,en;q=0.5",
                "User-Agent":
                  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0"
              }
            }
          );
          console.log("response: ", response);
          responseBody = await response.json();
          console.log("RESPONSE BODY1:", responseBody);
        } catch (e) {
          console.log(e);
        }
        setStats(responseBody.id);
        console.log("RESPONSE BODY:", responseBody);
        console.log("ID: ", stats);
      }
      fetchSearchResults();
    }
  }, [summonerName]);

  return (
    <div>
      <h1>Stats of summoner with ID: {summonerName}</h1>
      <button onClick={() => router.push(`${router.asPath}/match-history`)}>
        To match-history
      </button>
    </div>
  );
}

export default Stats;
