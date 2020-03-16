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
  padding: 5px;
`;

const ImageBox = styled.div`
  height: 74px;
  width: 74px;
  background-color: grey;
  border-radius: 5px;
  margin: 3px;
`;

const EmptyImage = styled.div`
  height: 74px;
  width: 74px;
  background-color: grey;
  border-radius: 5px;
  margin: 3px;
`;

const ItemContainer = styled.div`
  display: flex;
`;

export default function ItemBar({ stats }) {
  const itemsArray = createItemArray(stats);

  return (
    <ItemContainer>
      {itemsArray.map(item => {
        return item !== "0" ? (
          <ImageBox>
            <Item src={item} />
          </ImageBox>
        ) : (
          <EmptyImage />
        );
      })}
    </ItemContainer>
  );
}
