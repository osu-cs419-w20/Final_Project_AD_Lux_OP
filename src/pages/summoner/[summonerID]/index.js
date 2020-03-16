/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SummonerStats from "../../../components/SummonerStats";
import Spinner from "../../../components/Spinner";
import { getStatsBySummonerId, getSummonerById } from "../../../api/api";

const container = css`
  padding-right: 440px;
  padding-left: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  align-self: center;
`;

function Summoner() {
  const router = useRouter();
  const { summonerID } = router.query;
  const [rankedFlexStats, setRankedFlexStats] = useState({});
  const [rankedSoloDuoStats, setRankedSoloDuoStats] = useState({});
  const [summonerInfo, setSummonerInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  var iconBaseUrl = "https://opgg-static.akamaized.net/images/profile_icons/profileIcon";
  var iconID = "";
  var iconFormat = ".jpg";

  useEffect(() => {
    if (summonerID) {
      async function getSummonerStats() {
        const responseBody = await getStatsBySummonerId(summonerID);
        if (responseBody) {
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
      async function getSummonerInfo() {
        const responseBody = await getSummonerById(summonerID);
        if (responseBody) {
            console.log("getting profile icon");
            console.log(responseBody);
            setSummonerInfo(responseBody);
        }
      }
      getSummonerStats();
      getSummonerInfo();
    }
  }, [summonerID]);

  console.log(summonerInfo.profileIconId);
  iconID = summonerInfo.profileIconId;
  var finalIconUrl = iconBaseUrl.concat(iconID).concat(iconFormat);
  console.log(finalIconUrl);
  console.log(summonerInfo.summonerLevel);

  return (
    <div css={container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <Name>{rankedFlexStats.summonerName}</Name>
          </div>
          <img src={finalIconUrl} height="100" width="100"/>
          <div>
            <h2>Current Level: {summonerInfo.summonerLevel}</h2>
          </div>

          <SummonerStats
            flexStats={rankedFlexStats ? rankedFlexStats : null}
            soloDuoStats={rankedSoloDuoStats ? rankedSoloDuoStats : null}
          />
        </>
      )}
      <button
        onClick={() => {
          router.push(`/summoner/${summonerID}/match-history`);
        }}
      >
        View Match History
      </button>
    </div>
  );
}

export default Summoner;
