import React from "react";
import styled from "styled-components";
import { FaBomb } from "react-icons/fa";
import {
    WrapperError,
    Img,
    Message,
    Indication,
    Ahref,

  } from "./ScreenErrorStyled";

const ScreenError = () => {
  return (
    <WrapperError>
      <Img>
        <FaBomb size={100} />
      </Img>
      <Message>An unknown error has occured.</Message>
      <Indication>
        Please try refreshing the page, or
        <Ahref href="#">contact support</Ahref>
        if the problem persists.
      </Indication>
    </WrapperError>
  );
};

export default ScreenError;