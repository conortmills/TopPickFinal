import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// General
export const Wrapper = styled.div`
  width: 100%;
  margin: 160px auto;
  text-align: center;
  align-items: center;
  height: 40vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
export const RowFlex = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  @media (max-width: 1200px) {
    #main {
      flex-flow: row wrap;
    }
  }
`;
export const Main = styled.div`
  /* background: linear-gradient(90deg, transparent 100%, rgba(49, 165, 157, 0.5) 0); */
  background: rgba(49, 165, 157, 0.2);

  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: white;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  align-self: center;
  margin: 30px 0;

  span {
    position: absolute;
  }
  span:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(rgba(8, 20, 43, 0)),
      to(var(--color-logo-alt))
    );
    background: linear-gradient(
      to left,
      rgba(8, 20, 43, 0),
      var(--color-logo-alt)
    );
    -webkit-animation: 5s animateTop linear infinite;
    animation: 5s animateTop linear infinite;
  }

  @-webkit-keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  @keyframes animateTop {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  span:nth-child(2) {
    top: 0px;
    right: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(rgba(8, 20, 43, 0)),
      to(var(--color-logo-alt))
    );
    background: linear-gradient(
      to top,
      rgba(8, 20, 43, 0),
      var(--color-logo-alt)
    );
    -webkit-animation: 5s animateRight linear -1s infinite;
    animation: 5s animateRight linear -1s infinite;
  }

  @-webkit-keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    100% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @keyframes animateRight {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
    100% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(8, 20, 43, 0)),
      to(var(--color-logo-alt))
    );
    background: linear-gradient(
      to right,
      rgba(8, 20, 43, 0),
      var(--color-logo-alt)
    );
    -webkit-animation: 5s animateBottom linear infinite;
    animation: 5s animateBottom linear infinite;
  }

  @-webkit-keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  @keyframes animateBottom {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    100% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  span:nth-child(4) {
    top: 0px;
    left: 0px;
    height: 100%;
    width: 2px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(8, 20, 43, 0)),
      to(var(--color-logo-alt))
    );
    background: linear-gradient(
      to bottom,
      rgba(8, 20, 43, 0),
      var(--color-logo-alt)
    );
    -webkit-animation: 5s animateLeft linear -1s infinite;
    animation: 5s animateLeft linear -1s infinite;
  }

  @-webkit-keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    100% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  @keyframes animateLeft {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
    100% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }
  margin: 0 auto;
  padding: 20px 30px;

  display: flex;
  flex-flow: column;
  width: 100%;
  color: white;
  font-family: var(--font-body);
  background-color: rgba(49, 165, 157, 0.5);
  font-family: var(--font-body);
  width: 80%;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 20px 0;
  color: white;
  font-family: var(--font-heading);
`;

export const Button = styled.button`
  padding: 20px 40px;
  margin: 30px 0;
  border: none;
  color: white;
  max-width: 200px;
  border-radius: 10px;
  font-size: 1.5rem;
  background-color: rgba(49, 165, 157, 0.8);
`;
