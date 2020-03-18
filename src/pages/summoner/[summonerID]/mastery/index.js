/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from 'next/router';
import { getChampionMasteriesBySummonerId } from '../../../../api/api';
import ChampionMasteryCard from '../../../../components/championMasteryCard';
import NavBar from '../../../../components/navBar';

const labelStyle = css`
  color: white;
  text-align: center;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const containerStyle = css`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  justify-content: center;
`;

const itemStyle = css`
  margin: 20px;
`;

function Mastery() {
  const router = useRouter();

  const [championMasteries, setChampionMasteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const {summonerID} = router.query;

  useEffect(() => {
    async function getChampionMasteries() {
      if (summonerID) {
        const newChampionMasteries = await getChampionMasteriesBySummonerId(summonerID);
        setChampionMasteries(newChampionMasteries);
        setLoading(false);
      }
    }

    getChampionMasteries();
  }, [summonerID]);


  return (
    <div>
      <NavBar title={'Masteries'} onClickBack={() => {router.push("/summoner/".concat(summonerID))}}/>
      <div css={containerStyle}>
          {
            loading ? "" : championMasteries.map((mastery, index) => {
              if (index < 20) {
                return (
                  <div css={itemStyle}>
                    <ChampionMasteryCard key={index} masteryInfo={mastery}/>
                  </div>
                );
              }
            })
          }
      </div>
    </div>
  );
}

export default Mastery;
