/** @jsx jsx **/
import React from "react";
import styled from "@emotion/styled";
import { keyframes, css, jsx } from "@emotion/core";
import SeriesPromo from "./SeriesPromo";

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
  align-self: center;
  align-items: stretch;
  flex: 1;
`;

const Name = styled.h1`
  align-self: center;
`;

const promoBox = css`
  align-self: flex-end;
`;

const win = css`
  color: green;
`;

const lose = css`
  color: red;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgrey;
  border: 2px solid lightgrey;
  border-radius: 25px;
  padding: 40px;
  margin: 10px;
  width: 400px;
  height: 600px;
  text-align: center;

  p {
    font-size: 24;
    font-weight: bold;
  }
`;

export default function StatCard({ stats, name }) {
  const ratio = (stats.wins / stats.losses).toFixed(2);
  console.log("SERIES", stats.miniSeries);
  return (
    <div css={card}>
      <StatContainer>
        <Name>{name} Stats</Name>{" "}
        <Rank>
          <RankImage src={"/icons/Emblem_" + stats.tier + ".png"} />
          <p>
            {stats.tier} {stats.rank}
          </p>
          <p>{stats.leaguePoints} Points</p>
          {stats.hotStreak && <p css={onFire}>🔥 Hot Streak!</p>}
        </Rank>
        <p css={win}>Wins: {stats.wins}</p>
        <p css={lose}>Losses: {stats.losses}</p>
        <p>
          Win/Loss Ratio: {ratio} {ratio > 0.5 ? "😊" : "😪"}
        </p>
        {stats.miniSeries && (
          <>
            <p>Promotion Series Status:</p>
            <SeriesPromo css={promoBox} progress={stats.miniSeries.progress} />
          </>
        )}
      </StatContainer>
    </div>
  );
}
