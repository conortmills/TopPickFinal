import React from "react";
import styled from "styled-components";
import { Wrap } from "./FooterStyled";
import { WebsiteLogo } from "../Footer/FooterStyled";

const Footer = () => {
  return (
    <Wrap>
      <WebsiteLogo src="/foabtLogo.png" />
    </Wrap>
  );
};

export default Footer;
