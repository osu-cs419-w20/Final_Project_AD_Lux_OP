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

const Name = styled.h1`
  align-self: center;
`;

const container = css`
  padding-right: 440px;
  padding-left: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MatchHistory() {
  const router = useRouter();
  const [loading, setIsLoading] = useState(true);
  const [accountId, setAccountID] = useState("");
  const [summonerName, setSummonerName] = useState("");
  const [matchHistory, setMatchHistory] = useState([]);
  const { summonerID } = router.query;

  // get summoner stuff by id. then get match history off ACCOUNT id./
  useEffect(() => {
    if (summonerID) {
      async function getSummonerDetailsById() {
        const summonerInfoResponse = await getSummonerbyId(summonerID);
        if (summonerInfoResponse) {
          console.log(summonerInfoResponse);
          setAccountID(summonerInfoResponse.accountId);
          setSummonerName(summonerInfoResponse.name);
        }
      }
      getSummonerDetailsById();
    }
  }, [summonerID]);

  useEffect(() => {
    if (accountId) {
      async function getMatchHistory() {
        const matchHistoryResponse = await getMatchHistoryBySummonerId(
          accountId
        );
        if (matchHistoryResponse) {
          console.log("MATCHHIST: ", matchHistoryResponse);
          setMatchHistory(_.slice(matchHistoryResponse.matches, 0, 10));
        }
        setIsLoading(false);
      }
      getMatchHistory();
    }
  }, [accountId]);

  return (
    <div css={container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <Name>{summonerName}: Match History (Last 10 Games)</Name>
          </div>
          {matchHistory.map((match, i) => {
            console.log("match", match);
            return (
              <MatchCard
                key={i}
                game={match.gameId}
                summonerName={summonerName}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default MatchHistory;
