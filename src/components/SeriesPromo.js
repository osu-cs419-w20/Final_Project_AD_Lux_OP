/** @jsx jsx **/
import React from "react";
import styled from "@emotion/styled";
import { keyframes, css, jsx } from "@emotion/core";

const promoContainer = css`
  display: flex;
  justify-content: center;
  border: 2px solid grey;
  border-radius: 25px;
  background-color: grey;
`;

function WinLoss({ outcome }) {
  let symbol = "➖";
  console.log("HELLO?");
  if (outcome === "W") {
    console.log("W");
    symbol = "✔️";
  } else if (outcome === "L") {
    console.log("L");
    symbol = "❌";
  }
  return <p>{symbol}</p>;
}

export default function SeriesPromo({ wins, losses, target, progress }) {
  const progressList = progress.split("");
  console.log("LIST:", progressList);
  return (
    <>
      <div css={promoContainer}>
        {progressList.map((element, i) => {
          console.log("here");
          return <WinLoss key={i} outcome={element} />;
        })}
      </div>
    </>
  );
}
