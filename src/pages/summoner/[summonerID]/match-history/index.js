/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Spinner from "../../../../components/Spinner";
import {
  getMatchHistoryBySummonerId,
  getSummonerbyId
} from "../../../../api/api";
import _ from "lodash";
import MatchCard from "../../../../components/MatchCard";
import NavBar from "../../../../components/navBar";

const Name = styled.h1`
  align-self: center;
  color: white;
`;

const container = css`
  margin-top: 40px;
  height:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    border-radius: 10px;
  }
`;

function MatchHistory() {
  const router = useRouter();
  const { summonerID } = router.query;

  const [loading, setIsLoading] = useState(true);
  const [summonerName, setSummonerName] = useState("");
  const [matchHistory, setMatchHistory] = useState([]);

  useEffect(() => {
    async function getMatchHistory() {
      if (!summonerID) {
        return;
      }

      const summonerInfo = await getSummonerbyId(summonerID);
      setSummonerName(summonerInfo.name);
      if (summonerInfo) {
        const matchHistory = (
          await getMatchHistoryBySummonerId(summonerInfo.accountId)
        ).matches;
        setMatchHistory(_.slice(matchHistory, 0, 10));
        setIsLoading(false);
      }
    }

    getMatchHistory();
  }, [summonerID]);

  var backUrl = "/summoner/".concat(summonerID);
  console.log(backUrl);

  return (
    <div>
      <NavBar title={'Match History'} onClickBack={() => {router.push(backUrl)}}/>
      <div css={container}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div>
              <Name>{summonerName}'s Last 10 Games</Name>
            </div>
            {matchHistory.map((match, i) => {
              return (
                <MatchCard key={i} match={match} summonerName={summonerName} />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default MatchHistory;
