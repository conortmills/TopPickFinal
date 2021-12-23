import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//parent header component with functionality to always remain visible and preserve relative children size

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  background-color: lightblue;
  flex-basis: 15%;
  max-height: 15%;
  min-height: 15%;
  width: 100%;

  z-index: 1;
  border-bottom: 5px;
`;

export const WebsiteName = styled(Link)`
  font-size: 20px;
`;

export const WebsiteLogo = styled.img``;

export const NavBox = styled(Link)`
  display: flex;
  align-items: stretch;
  justify-content: center;

  min-height: 100%;

  width: auto;
`;

export const HomeNav = styled(Link)`
  display: flex;
  align-items: stretch;
  justify-content: center;

  min-height: 100%;

  min-width: 10%;
  max-width: 10%;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
  color: var(--color-body-dark);
  color: var(--color-dark-font);
`;
