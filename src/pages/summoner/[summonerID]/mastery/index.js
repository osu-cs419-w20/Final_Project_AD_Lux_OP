/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from 'next/router';
import { getChampionMasteriesBySummonerId } from '../../../../api/api';
import ChampionMasteryCard from '../../../../components/championMasteryCard';

const container = css`
  height: 100%;
  width: 100%;
  background-image: url("https://i.imgur.com/voR8Lgi.jpg");
  background-repeat: no-repeat;
  background-color: black;
  position: absolute;
  overflow: auto;
`;

const labelStyle = css`
  color: white;
  text-align: center;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const backButtonStyle = css`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

function Mastery() {
  const router = useRouter();

  const [championMasteries, setChampionMasteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const {summonerID} = router.query;

  useEffect(() => {
    async function getChampionMasteries() {
      if (!summonerID) {
        return;
      }

      const newChampionMasteries = await getChampionMasteriesBySummonerId(summonerID);
      setChampionMasteries(newChampionMasteries);
      setLoading(false);
    }

    getChampionMasteries();
  }, [summonerID]);

  var backUrl = "/summoner/".concat(summonerID);
  console.log(backUrl);

  return (
    <div css={container}>
        <button css={backButtonStyle} onClick={() => {router.push(backUrl)}}>Back</button>
        <h1 css={labelStyle}>Champion Mastery</h1>
        {
          loading ? "" : championMasteries.map((mastery, index) => {
            console.log(mastery);
            return <ChampionMasteryCard key={index} masteryInfo={mastery}/>
          })
        }
    </div>
  );
}

export default Mastery;
