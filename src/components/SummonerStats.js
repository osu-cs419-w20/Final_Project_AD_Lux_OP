import React, { useState, useEffect } from "react";
import FlexStats from "./FlexStats";
import SoloDuoStats from "./SoloDuoStats";

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
      {props.flexStats && <FlexStats stats={props.flexStats} />}
      {props.soloDuoStats && <SoloDuoStats stats={props.soloDuoStats} />}
    </div>
  );
}
