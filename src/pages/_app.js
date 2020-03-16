/** @jsx jsx */
// pages/_app.js
import React from "react";
import App, { Container } from "next/app";
import Layout from "../components/layout";
import { Global, css, jsx } from "@emotion/core";

const globalStyles = css`
  /* @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap"); */
  @import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
  font-family: "Pacifico", sans-serif;
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
