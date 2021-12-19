import React from "react";
import styled from "styled-components";
import { FiFrown } from "react-icons/fi";

const GetErrorScreen = () => {
  return (
    <div>
      <ErrorBox>
        <FiFrown style={{ fontSize: "100px", alignContent: "center" }} />
        <ErrorMessage>An unknown error has occured.</ErrorMessage>
        <SupportMessage>
          Please try refeshing the page, or{" "}
          <SupportLink> contact support </SupportLink> if the problem persists.
        </SupportMessage>
      </ErrorBox>
    </div>
  );
};

export default GetErrorScreen;

const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
`;

const ErrorMessage = styled.div`
  padding-top: 20px;
  font-weight: bold;
  font-size: 40px;
  padding-bottom: 30px;
`;

const SupportLink = styled.div`
  padding-right: 3px;
  padding-left: 3px;
  color: blue;
  text-decoration: underline;
`;

const SupportMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
