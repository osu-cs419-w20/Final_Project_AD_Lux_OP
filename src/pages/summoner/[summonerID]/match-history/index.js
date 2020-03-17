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
  height:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://i.imgur.com/voR8Lgi.jpg");
  background-repeat: no-repeat;
  background-color: black;
  position: absolute;
  overflow: scroll;
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
        const matchHistory = (await getMatchHistoryBySummonerId(summonerInfo.accountId)).matches;
        setMatchHistory(_.slice(matchHistory, 0, 10));
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
