/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import {css, jsx, Global} from '@emotion/core';
import { getChampionInfoById, getChampionFullImageUrlById } from '../api/api';

export default function ChampionMasteryCard({masteryInfo}) {

    const [championInfo, setChampionInfo] = useState({});
    const [championImage, setChampionImage] = useState("");

    const styles = css`
        background-color: lightgrey;
        border: 2px solid lightgrey;
        border-radius: 25px;
        padding: 20px;
        margin: auto;
        margin-bottom: 20px;
        overflow: auto;
        width: 45%;
        display: block;

        img {
            height: 120px;
            width: 120px;
            border-radius: 5px;
        }
    `;

    useEffect(() => {
        async function getChampionData() {
            const newChampionInfo = await getChampionInfoById(masteryInfo.championId);
            setChampionInfo(newChampionInfo);

            const newChampionImage = await getChampionFullImageUrlById(masteryInfo.championId);
            setChampionImage(newChampionImage);
        }
        getChampionData();
    }, []);

    return (
        <div css={styles}>
            <div>
                <img src={championImage}/>
            </div>
            <div>
                <div>
                    <h1>{championInfo.name}</h1>
                    <h1>{championInfo.title}</h1>
                </div>
                <div>
                    <h2>Champion Level: {masteryInfo.championLevel}</h2>
                    <h2>Chest Granted: {masteryInfo.chestGranted.toString()}</h2>
                    <h2>Champion Points Since Last Level: {masteryInfo.championPointsSinceLastLevel}</h2>
                    <h2>Champion Points Until Next Level: {masteryInfo.championPointsUntilNextLevel}</h2>
                </div>
            </div>
        </div>
    );
}
