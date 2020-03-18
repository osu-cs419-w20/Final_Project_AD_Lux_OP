/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import {css, jsx, Global} from '@emotion/core';
import { getChampionInfoById, getChampionTileImageUrlById } from '../api/api';

export default function ChampionMasteryCard({masteryInfo}) {

    const [championInfo, setChampionInfo] = useState({});
    const [championImage, setChampionImage] = useState("");

    const styles = css`
        flex-shrink: 0;
        background-image: url(${championImage});
        width: 380px;
        height: 380px;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        border-radius: 25px;

        .infoContainer {
            margin: 0px;
            width: 100%;
            background-color: #c0c0c0;
            display: none;          
            border-bottom-right-radius: 25px;
            border-bottom-left-radius: 25px;

            h2 {
                font-size: 13px;
            }
        }

        :hover .infoContainer {
            display: block;
        }
    `;

    useEffect(() => {
        async function getChampionData() {
            const newChampionInfo = await getChampionInfoById(masteryInfo.championId);
            setChampionInfo(newChampionInfo);

            const newChampionImage = await getChampionTileImageUrlById(masteryInfo.championId);
            setChampionImage(newChampionImage);
        }
        getChampionData();
    }, []);

    return (
        <div css={styles}>
            <div className={'infoContainer'}>
                <h1>{championInfo.name}</h1>
                <h2>Champion Level: {masteryInfo.championLevel}</h2>
                <h2>Chest Granted: {masteryInfo.chestGranted.toString()}</h2>
                <h2>Champion Points Since Last Level: {masteryInfo.championPointsSinceLastLevel}</h2>
                <h2>Champion Points Until Next Level: {masteryInfo.championPointsUntilNextLevel}</h2>
            </div>
        </div>
    );
}

/*
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

*/
