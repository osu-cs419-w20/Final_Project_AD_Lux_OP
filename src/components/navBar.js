/** @jsx jsx */
import React, { useEffect, useState, Children } from "react";
import { useRouter } from "next/router";

import { css, jsx, Global } from "@emotion/core";

import { IoIosArrowBack } from "react-icons/io";

function NavBar(props) {
    const {title, onClickBack} = props;
    const navStyles = css`
        background-color: #c0c0c0;
        position: fixed;
        top:0;
        z-index:100;
        
        margin: 0px;
        padding: 0px;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        div:last-child {
            margin-left: auto;
            margin-right: 20px;
        }
    `;

    const navItems = css`
        padding: 5px;
        display: inline-block
    `;

    const titleStyle = css`
        margin: 0px;
        font-size: 30px;
    `;
    
    const backArrow = css`
        :hover {
            color: grey;
        }
    `;

    console.log(props);

    return(
        <nav css={navStyles}>
            <div css={navItems}>
                <IoIosArrowBack css={backArrow} size={40} onClick={() => {onClickBack()}}/>
            </div>
            <div css={navItems}>
                <h1 css={titleStyle}>{title}</h1>
            </div>
            {
                <div css={navItems}>
                    {props.children}
                </div>
            }
        </nav>
    );
}

export default NavBar;