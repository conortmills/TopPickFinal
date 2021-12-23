import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Logoutbut onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Logoutbut>
  );
};

const Logoutbut = styled.button`
  padding-left: 100px;
  padding-right: 100px;
  background-color: green;
  color: white;
  font-weight: bold;
  font-size: 80px;
`;

export default LogoutButton;
