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


  useEffect(() => {
    async function getMatchHistory() {
      const summonerInfo = await getSummonerbyId(summonerID);
      setAccountID(summonerInfo.accountId);
      setSummonerName(summonerInfo.name);
      if (summonerInfo) {
        const tempMatchHistory = (await getMatchHistoryBySummonerId(summonerInfo.accountId)).matches;
        setMatchHistory(_.slice(tempMatchHistory, 0, 10));
        setIsLoading(false);      
      }
    }
    
    getMatchHistory();
  }, [summonerID]);

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
            return (
              <MatchCard
                key={i}
                match={match}
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
