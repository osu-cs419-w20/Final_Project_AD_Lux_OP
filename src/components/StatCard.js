/** @jsx jsx **/
import React from "react";
import styled from "@emotion/styled";
import { keyframes, css, jsx } from "@emotion/core";

const wiggle = keyframes`
  from, to { transform: rotate(0); }
  33% { transform: rotate(8deg); }
  66% { transform: rotate(-8deg); }
`;

const onFire = css`
  color: red;
`;

const RankImage = styled.img`
  height: 150px;
  width: 150px;
`;

const Rank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const card = css`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  align-self: center;
`;

const StatContainer = styled.div`
  border: 1px solid black;
  padding: 50px;
`;

export default function StatCard({ stats, name }) {
  const ratio = (stats.wins / stats.losses).toFixed(2);
  return (
    <div css={card}>
      <Name>{name} Stats</Name>
      <StatContainer>
        {" "}
        <Rank>
          <RankImage src={"/icons/Emblem_" + stats.tier + ".png"} />
          <p>
            {stats.tier} {stats.rank}
          </p>
        </Rank>
        {stats.hotStreak && <p css={onFire}>🔥 Hot Streak!</p>}
        <p>Current Points: {stats.leaguePoints}</p>
        <p>Wins: {stats.wins}</p>
        <p>Losses: {stats.losses}</p>
        <p>Win/Loss Ratio: {ratio}</p>
      </StatContainer>
    </div>
  );
}
