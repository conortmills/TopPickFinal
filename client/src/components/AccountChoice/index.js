import React from "react";

import { PageBox, ChoiceBox, Choice } from "./AccountChoiceStyled";

const AccountChoice = () => {
  return (
    <PageBox>
      <ChoiceBox>
        <Choice>Picker Account</Choice>
        <Choice>Consumer Account</Choice>
      </ChoiceBox>
    </PageBox>
  );
};
