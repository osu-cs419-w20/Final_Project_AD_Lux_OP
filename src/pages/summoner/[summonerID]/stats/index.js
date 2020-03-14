/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx, Global } from "@emotion/core";
import { useRouter } from "next/router";

function Stats() {
  const router = useRouter();
  const { summonerName } = router.query;
  const [id, setId] = useState("");

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

Stats.getInitialProps = async function(context) {
  console.log("--------------------------------------------");
  console.log(context.query.summonerID);
  const url = `https://league-proxy.herokuapp.com/lol/summoner/v4/summoners/by-name/${context.query.summonerID}?api_key=RGAPI-676a41fd-4840-4883-a548-72b432302ed9`;
  const apiToken = "RGAPI-a3fce233-6c1f-4697-85c9-757a0cad7a7e";
  const responseBody = await response.json();
  console.log("RESPONSE:", responseBody);
  return { data: responseBody };
};
