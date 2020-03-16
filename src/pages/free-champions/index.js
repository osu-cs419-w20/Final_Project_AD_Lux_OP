/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SummonerStats from "../../components/SummonerStats";
import Spinner from "../../components/Spinner";
import { getStatsBySummonerId, getSummonerById } from "../../api/api";

const style = css`
  background-image: url("https://i.imgur.com/voR8Lgi.jpg");
  background-repeat: no-repeat;
  background-color: black;
`;

function free_champion() {
  const router = useRouter();
  const [freeChampion, setFreeChampion] = useState({});
  const [loading, setIsLoading] = useState(true);

  return(
    <div css={style}>

    </div>
  );
}

export default free_champion;
