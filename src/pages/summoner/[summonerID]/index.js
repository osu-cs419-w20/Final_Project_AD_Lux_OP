/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SummonerStats from "../../../components/SummonerStats";
import Spinner from "../../../components/Spinner";
import { getStatsBySummonerId } from "../../../api/api";

const container = css`
  padding-right: 300px;
  padding-left: 300px;
  align-content: center;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  align-self: center;
`;

function Summoner() {
  const router = useRouter();
  const { summonerID } = router.query;
  const [rankedFlexStats, setRankedFlexStats] = useState({});
  const [rankedSoloDuoStats, setRankedSoloDuoStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (summonerID) {
      async function getSummonerStats() {
        const responseBody = await getStatsBySummonerId(summonerID);
        if (responseBody) {
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
    <div css={container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Name>{rankedFlexStats.summonerName}</Name>

          <SummonerStats
            flexStats={rankedFlexStats ? rankedFlexStats : null}
            soloDuoStats={rankedSoloDuoStats ? rankedSoloDuoStats : null}
          />
        </>
      )}
    </div>
  );
}

export default Summoner;
