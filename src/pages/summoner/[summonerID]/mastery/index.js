/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from 'next/router';
import { getChampionMasteriesBySummonerId } from '../../../../api/api';
import ChampionMasteryCard from '../../../../components/championMasteryCard';

const labelStyle = css`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
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

  return (
    <div>
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