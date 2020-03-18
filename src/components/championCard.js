/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import {css, jsx, Global} from '@emotion/core';
import { getChampionInfoById, getChampionFullImageUrlById } from '../api/api';

export default function ChampionCard({id}) {

    const [championInfo, setChampionInfo] = useState({});
    const [championImage, setChampionImage] = useState("");

    const styles = css`
        background-color: lightgrey;
        border: 2px solid lightgrey;
        border-radius: 25px;
        padding: 10px;
        margin: 10px;

        img {
            overflow: hidden;
            height: 120px;
            width: 120px;
            border-radius: 5px;
        }

        label {
          text-align: center;
          display: block;
        }
    `;

    useEffect(() => {
        async function getChampionData() {
            const newChampionInfo = await getChampionInfoById(id);
            setChampionInfo(newChampionInfo);
            console.log(newChampionInfo);

            const newChampionImage = await getChampionFullImageUrlById(id);
            setChampionImage(newChampionImage);
        }
        getChampionData();

    }, []);

    return (
        <div css={styles}>
            <img src={championImage}/>
            <label>{championInfo.name}</label>
        </div>
    );
}
