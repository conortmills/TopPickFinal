import React from "react";
import styled from "styled-components";
import { Wrapper, Title, Main, Button } from "./styled-components";
import { LoadMore } from "../HomePage/LoadMoreButton";
const Confirmation = () => {
  return (
    <Wrapper>
      <Main>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Title>Thank You!</Title>
        <p>A confirmation has been sent to your email.</p>
        <p>Since you're here, join our list for discounts!</p>
      </Main>
    </Wrapper>
  );
};

export default Confirmation;
