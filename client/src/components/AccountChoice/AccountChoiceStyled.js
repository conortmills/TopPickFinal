import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ChoiceBox = styled.div`
  margin-top: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Choice = styled(Link)`
  text-align: center;
  width: 500px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 30px;
  text-decoration: none;
  border: 3px solid;
  border-radius: 30px;
  margin-top: 20px;
`;
