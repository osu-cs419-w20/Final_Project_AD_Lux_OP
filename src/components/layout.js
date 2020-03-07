/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/core';

import globalStyle from '../styles/global';


function Layout(props) {
  return (
    <div>
      <Global styles={globalStyle}/>
      {props.children}
    </div>
  )
}

export default Layout;