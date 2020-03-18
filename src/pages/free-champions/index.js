/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { css, jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";

import Spinner from "../../components/Spinner";
import { getChampionRotation } from "../../api/api";
import ChampionList from '../../components/championList';
import NavBar from "../../components/navBar";
import CheckBox from "../../components/checkbox";

const styles = css`
  margin-top: 100px;
  margin-left: 60px;
  margin-right: 60px;
  padding: auto;
  display: block;
  justify-content: center;
  flex-direction: column
  overflow: auto;
`;

const labelStyle = css`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

function free_champion() {
  const router = useRouter();
  const [mFreeChampions, setMFreeChampions] = useState();
  const [loading, setLoading] = useState(true);
  const [newPlayer, setNewPlayer] = useState(false);

  useEffect(() => {
    async function getFreeChampions() {
      let freeChampions = await getChampionRotation();
      if (freeChampions) {
        setMFreeChampions(freeChampions);
        setLoading(false);
      }
    }
    getFreeChampions();
  }, []);

  return(
    <div>
      <NavBar title={'Free To Play Champions'} onClickBack={() => {router.push('/')}}>
        <CheckBox label={'New Player'} size={40} onClick={(value) => setNewPlayer(value)}/>
      </NavBar>
      <div css={styles}>
        {
        loading ? <Spinner/> :
          <div>
            {
              newPlayer ?
              <ChampionList champions={mFreeChampions.freeChampionIdsForNewPlayers}/> :
              <ChampionList champions={mFreeChampions.freeChampionIds}/>
            }
          </div>
        }
      </div>
    </div>
  );
}

export default free_champion;
