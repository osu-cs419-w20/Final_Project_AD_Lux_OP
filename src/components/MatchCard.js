/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import {
  getMatchInfoByMatchId,
  getChampionFullImageUrlById,
  getChampionInfoById,
  getItemFullImageUrlById
} from "../api/api";
import styled from "@emotion/styled";
import ItemBar from "./ItemBar";

const MatchBox = styled.div`
  background-color: ${props => props.result || lightgrey};
  border: 2px solid ${props => props.result || lightgrey};
  border-radius: 25px;
  padding: 10px;
  margin: 10px;
  display: flex;
`;

const championInfo = css`
  background-color: darkgrey;
  border-radius: 25px;
  padding: 15px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ImgContainer = styled.div`
  overflow: hidden;
  height: 120px;
  width: 120px;
  border-radius: 5px;
`;

const summonerInfo = css`
  background-color: darkgrey;
  border-radius: 25px;
  padding: 15px;
  margin: 5px;
`;

export default function MatchCard({ match, summonerName }) {
  const [gameInfo, setGameInfo] = useState({});
  const [champImg, setChampImg] = useState("");
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMatchDetails() {
      setIsLoading(true);
  
      if(!match) {
        return;
      }
  
      let gameInfo = {};
  
      const matchDetails = await getMatchInfoByMatchId(match.gameId);
      const champInfo = await getChampionInfoById(match.champion);
      const champImageUrl = await getChampionFullImageUrlById(match.champion);
  
      const participantInfo = matchDetails.participantIdentities.find(element => element.player.summonerName === summonerName);
      const stats = matchDetails.participants.find(element => element.participantId == participantInfo.participantId);
  
      gameInfo = {
        "champion": champInfo,
        "stats": stats.stats
      };
  
      setChampImg(champImageUrl);
      setGameInfo(gameInfo);
      setIsLoading(false);
    }
    
    getMatchDetails();
  }, [match]);

  return (
    <>
      {!loading && (
        <>
          <MatchBox result={gameInfo.stats.win ? "#77dd77" : "palevioletred"}>
            <div css={championInfo}>
              <ImgContainer>
                <img src={champImg}></img>
              </ImgContainer>
              <h1>{gameInfo.champion.name}</h1>
              <h3>{gameInfo.champion.title}</h3>
              <h1>
                K/D/A: {gameInfo.stats.kills}/{gameInfo.stats.deaths}/
                {gameInfo.stats.assists}
              </h1>
            </div>
            <div css={summonerInfo}>
              <h2>
                Damage Dealt To Champions:{" "}
                {gameInfo.stats.totalDamageDealtToChampions}
              </h2>
              <h2>Largest Killing Spree: {gameInfo.stats.largestKillingSpree}</h2>
              <h2>Largest Multi Kill: {gameInfo.stats.largestMultiKill}</h2>
              <h2>Gold Earned: {gameInfo.stats.goldEarned}</h2>
              <ItemBar stats={gameInfo.stats} />
            </div>
          </MatchBox>
        </>
      )}
    </>
  );
}
