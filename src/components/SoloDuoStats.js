import React from "react";

export default function SoloDuoStats({ stats }) {
  return (
    <div>
      <h1>Ranked Solo/Duo Stats</h1>
      <p>
        RANK: {stats.tier} {stats.rank}
      </p>
    </div>
  );
}
