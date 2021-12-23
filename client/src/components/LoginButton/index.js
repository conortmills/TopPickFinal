import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <LogoutButton onClick={() => loginWithRedirect()}>Log In</LogoutButton>
  );
};

export default LoginButton;

const LogoutButton = styled.button`
  margin-top: 50px;
  font-size: 100px;
  background-color: lightblue;
  border-radius: 20px;
  padding: 30px;
`;
