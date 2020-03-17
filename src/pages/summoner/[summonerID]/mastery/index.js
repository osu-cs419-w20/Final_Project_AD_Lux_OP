/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx, Global } from '@emotion/core';
import { useRouter } from 'next/router';
import { getChampionMasteriesBySummonerId } from '../../../../api/api';

function Mastery() {
  const router = useRouter();

  const [championMasteries, setChampionMasteries] = useState([]);
  const [loading, setLoading] = useState(true);
  const {summonerID} = router.query;

  useEffect(() => {
    async function getChampionMasteries() {
      const newChampionMasteries = await getChampionMasteriesBySummonerId(summonerID);
      setChampionMasteries(newChampionMasteries);
      setLoading(false);
    }

    getChampionMasteries();
  }, [summonerID]);

  return (
    <div>
        <h1>Mastery of summoner with ID: {summonerID}</h1>
        {
          loading ? "" : championMasteries.map((mastery, index) => {
            return <h2>champion ID {mastery.championId}</h2>
          })
        }
    </div>
  );
}

export default Mastery;