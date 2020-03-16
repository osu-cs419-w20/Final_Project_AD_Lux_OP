/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import SummonerStats from "../../components/SummonerStats";
import Spinner from "../../components/Spinner";
import { getStatsBySummonerId, getSummonerById } from "../../api/api";

const container = css`
  padding-right: 440px;
  padding-left: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function free_champion() {
  const router = useRouter();
  const [freeChampion, setFreeChampion] = useState({});
  const [loading, setIsLoading] = useState(true);
}
