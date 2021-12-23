import React from "react";
import styled from "styled-components";
import { Wrap } from "./FooterStyled";
import { WebsiteLogo } from "../Footer/FooterStyled";

const Footer = () => {
  return (
    <Wrap>
      <h1>Footer</h1>
      <WebsiteLogo src="/foabtLogo.png" />
    </Wrap>
  );
};

export default Footer;
