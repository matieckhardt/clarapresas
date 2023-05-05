import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { ParallaxProvider, Parallax } from "react-skrollr";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const data = {
  "data-top-bottom": "transform: translateX(-100%);",
  "data-center-center": "opacity: 1;",
  "data-bottom-top": "opacity: 0;transform: translateX(0%);",
};

const Skrollr = () => (
  <ParallaxProvider
    init={{
      smoothScrollingDuration: 1000,
      smoothScrolling: true,
      forceHeight: false,
    }}
  >
    <div style={styles}>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>

      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
      <Parallax data={data}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </Parallax>
    </div>
    <div style={{ background: "black", height: 100 }} />
  </ParallaxProvider>
);

export default Skrollr;
