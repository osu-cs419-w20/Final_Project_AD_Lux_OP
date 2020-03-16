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

export default function MatchCard({ game, summonerName }) {
  const [match, setMatch] = useState({});
  const [participantId, setParticipantId] = useState("");
  const [stats, setStats] = useState({});
  const [loading, setIsLoading] = useState(true);
  const [champInfo, setChampInfo] = useState({});
  const [champId, setChampId] = useState("");
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    async function getMatchDetails() {
      const matchDetails = await getMatchInfoByMatchId(game);
      if (matchDetails) {
        setMatch(matchDetails);
        console.log("DEETS:", matchDetails);
        matchDetails.participantIdentities.forEach(element => {
          if (element.player.summonerName === summonerName) {
            setParticipantId(element.participantId);
          }
        });
      }
    }
    getMatchDetails();
  }, [game]);

  useEffect(() => {
    if (stats) {
      async function getImg() {
        const imageResponse = await getChampionFullImageUrlById(
          stats.championId
        );
        if (imageResponse) {
          setImgURL(imageResponse);
        }
      }
      getImg();
    }
  }, [stats]);

  useEffect(() => {
    if (stats) {
      async function getItemImages() {
        // for (let i = 0; i < 6; i++) {
        // }
      }
      getItemImages();
    }
  }, [stats]);

  useEffect(() => {
    if (participantId) {
      match.participants.forEach(element => {
        if (element.participantId === participantId) {
          setStats(element);
          console.log("STATS: ", element);
          setChampId(element.championId);
        }
      });
      setIsLoading(false);
    }
  }, [participantId]);

  useEffect(() => {
    if (champId) {
      async function getChampInfo() {
        const champResponse = await getChampionInfoById(stats.championId);
        if (champResponse) {
          setChampInfo(champResponse);
        }
      }
      getChampInfo();
    }
  }, [champId]);

  return (
    <>
      {!loading && (
        <>
          <MatchBox result={stats.stats.win ? "#77dd77" : "palevioletred"}>
            <div css={championInfo}>
              <ImgContainer>
                <img src={imgURL}></img>
              </ImgContainer>
              <h1>{champInfo.name}</h1>
              <h3>{champInfo.title}</h3>
              <h1>
                K/D/A: {stats.stats.kills}/{stats.stats.deaths}/
                {stats.stats.assists}
              </h1>
            </div>
            <div css={summonerInfo}>
              <h2>
                Damage Dealt To Champions:{" "}
                {stats.stats.totalDamageDealtToChampions}
              </h2>
              <h2>Largest Killing Spree: {stats.stats.largestKillingSpree}</h2>
              <h2>Largest Multi Kill: {stats.stats.largestMultiKill}</h2>
              <h2>Gold Earned: {stats.stats.goldEarned}</h2>
              <ItemBar stats={stats.stats} />
            </div>
          </MatchBox>
        </>
      )}
    </>
  );
}
