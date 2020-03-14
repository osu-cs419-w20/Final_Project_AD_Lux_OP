import React from "react";

export default function FlexStats({ stats }) {
  return (
    <div>
      <h1>Ranked Flex Stats</h1>
      <p>
        RANK: {stats.tier} {stats.rank}
      </p>
    </div>
  );
}
