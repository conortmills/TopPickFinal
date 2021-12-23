import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TopPickerContext } from "../TopPickerContext";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";

const SignIn = () => {
  return (
    <PageContainer>
      <Welcome>Welcome to Top Picker! Please login to continue</Welcome>
      <LoginButton></LoginButton>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Welcome = styled.div`
  margin-top: 400px;
  font-size: 80px;
`;

export default SignIn;
