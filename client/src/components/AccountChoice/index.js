import React from "react";
import styled from "styled-components";

import { PageBox, ChoiceBox, Choice } from "./AccountChoiceStyled";

const AccountChoice = () => {
  return (
    <PageBox>
      <ChoiceBox>
        <AccountPromt>
          Select which type of account you would like to create-
        </AccountPromt>
        <Choice to="/create-picker-account">Picker Account</Choice>
        <Choice to="/create-consumer-account">Consumer Account</Choice>
      </ChoiceBox>
    </PageBox>
  );
};

const AccountPromt = styled.div`
  font-size: 40px;
`;

export default AccountChoice;
