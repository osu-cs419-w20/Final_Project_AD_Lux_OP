/** @jsx jsx */

import React from "react";
import { css, jsx, Global } from "@emotion/core";

import ChampionCard from "./championCard";

export default function ChampionList({champions}) {
    const styles = css`
        text-align: center;
        display: flex;
        flex-wrap: wrap;
    `;

    return (
        <div css={styles}>
            {
                champions.map((element, index) => {
                    return <ChampionCard key={index} id={element}/>;
                })
            }
        </div>
    );
}