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
        <div>
          <Name>{summonerName}: Match History</Name>
        </div>
      )}
    </div>
  );
}

export default MatchHistory;
