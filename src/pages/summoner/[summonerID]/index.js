/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SummonerStats from "../../../components/SummonerStats";
import Spinner from "../../../components/Spinner";
import { getStatsBySummonerId, getSummonerById } from "../../../api/api";

const container = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://i.imgur.com/voR8Lgi.jpg");
  background-repeat: no-repeat;
  background-color: black;
  position: absolute;
  overflow: auto;


  button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;
  height: 100px;
  width: 100px;
  border-radius: 5px;
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

  var iconBaseUrl =
    "http://ddragon.leagueoflegends.com/cdn/10.5.1/img/profileicon/";
  var iconID = "";
  var iconFormat = ".png";

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
          } else {
            setRankedFlexStats("Unranked");
            setRankedSoloDuoStats("Unranked");
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
            <Name>{summonerInfo.name}</Name>
          </div>
          <ImgContainer>
            <img src={finalIconUrl} height="100" width="100" />
          </ImgContainer>
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
