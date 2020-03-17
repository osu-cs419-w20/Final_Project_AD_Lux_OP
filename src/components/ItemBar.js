/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx, Global } from "@emotion/core";
import {
  getMatchInfoByMatchId,
  getChampionFullImageUrlById,
  getChampionInfoById,
  getItemFullImageUrlById
} from "../api/api";
import styled from "@emotion/styled";

function createItemArray(stats) {
  const items = [];

  var i;
  for (i = 0; i < 6; i++) {
    const item = "item" + i;
    if (stats[item] !== 0) {
      const itemUrl = getItemFullImageUrlById(stats[item]);
      items.push(itemUrl);
    } else {
      items.push("0");
    }
  }
  return items;
}

const Item = styled.img`
  display: block;
  margin: 0 auto;
`;

const ImageBox = styled.div`
  overflow: hidden;
  height: 64px;
  width: 64px;
  background-color: grey;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
`;

const EmptyImage = styled.div`
  height: 74px;
  width: 74px;
  background-color: grey;
  border-radius: 10px;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div``;

const ItemContainer = styled.div`
  display: flex;
`;

export default function ItemBar({ stats }) {
  const itemsArray = createItemArray(stats);

  return (
    <ItemContainer>
      {itemsArray.map((item, i) => {
        return item !== "0" ? (
          <EmptyImage>
            <ImageBox key={i}>
              <Item src={item} />
            </ImageBox>
          </EmptyImage>
        ) : (
          <EmptyImage key={i} />
        );
      })}
    </ItemContainer>
  );
}
