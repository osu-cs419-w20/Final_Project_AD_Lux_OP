/** @jsx jsx **/
import React, { useState, useEffect } from "react";
import FlexStats from "./StatCard";
import StatCard from "./StatCard";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const rankedContainer = css`
  display: flex;
  align-items: center;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

export default function SummonerStats(props) {
  console.log("PROPS", props);

  if (props.queueType === "RANKED_FLEX_SR") {
    console.log("RANKED STATS SET");
    setQueueType("Ranked Flex");
  } else if (props.queueType === "RANKED SOLO 5x5") {
    console.log("RANKED SOLO STATS SET");
    setQueueType("Ranked Solo/Duo");
  }

  return (
    <div>
      <div css={rankedContainer}>
        {props.flexStats.tier && (
          <StatCard name="Ranked Flex" stats={props.flexStats} />
        )}
        {props.soloDuoStats.tier && (
          <StatCard name="Solo/Duo" stats={props.soloDuoStats} />
        )}
      </div>
    </div>
  );
}
