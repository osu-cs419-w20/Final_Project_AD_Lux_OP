/** @jsx jsx */
// pages/_app.js
import React from "react";
import App, { Container } from "next/app";
import Layout from "../components/layout";
import { css, jsx } from "@emotion/core";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
