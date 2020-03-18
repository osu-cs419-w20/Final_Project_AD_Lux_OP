/** @jsx jsx */
import React, { useEffect, useState } from "react";

import { css, jsx, Global } from "@emotion/core";
import { IoIosSquareOutline, IoIosSquare } from "react-icons/io";


function CheckBox({label, onClick, size}) {
    const [checked, setChecked] = useState(false);
    
    const style = css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        h1 {
            margin: 0px;
            padding: 0px;
            margin-right: 5px;

            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .CheckBox {
            margin: 0px;
            padding: 0px;
        }
    `;

    return(
    <div css={style} onClick={() => {
        setChecked(!checked);
        if (onClick) {
            onClick(!checked);
        }
    }}>
        <h1>{label}</h1>
        {checked ? 
            <IoIosSquare className={'CheckBox'} size={size}/> :
            <IoIosSquareOutline className={'CheckBox'} size={size}/>
        }
    </div>
    );
}

export default CheckBox;
