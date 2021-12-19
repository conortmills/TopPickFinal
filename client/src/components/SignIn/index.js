import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TopPickerContext } from "../TopPickerContext";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [textValue, setTextValue] = useState("");
  const { activeUser, setActiveUser } = useContext(TopPickerContext);
  const [status, setStatus] = useState(null);
  // let history = useHistory();

  const CheckUser = () => {
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name: textValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === 200) {
          console.log("JSON", json);
          setActiveUser(json.data);
          sessionStorage.setItem("currentUser", JSON.stringify(json.data));
          // history.push("/");
        } else if (json.status === 404) {
          setStatus("error");
        }
      })
      .catch((err) => {
        console.log("check");
      });
  };
  return (
    <SignInPage>
      <SignInHeader> Top Picker</SignInHeader>
      {status ? (
        <ErrorPage style={{ backgroundImage: "url(/images/facespace_bg.jpg)" }}>
          This Account Does Not Exist
        </ErrorPage>
      ) : (
        <SignInMain
          style={{ backgroundImage: "url(/images/facespace_bg.jpg)" }}
        >
          <SignInBox>
            <UserInput
              placeholder="Your Username"
              type="text"
              value={textValue}
              onChange={(ev) => {
                setTextValue(ev.target.value);
              }}
            />
            <SubmitButton onClick={CheckUser}>Submit</SubmitButton>
          </SignInBox>
          <CreateNewAccount>
            <NewAccount></NewAccount>
          </CreateNewAccount>
        </SignInMain>
      )}
    </SignInPage>
  );
};

export default SignIn;

const CreateNewAccount = styled.div``;

const NewAccount = styled(NavLink)``;

const SignInPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--max-content-width);
`;

const SignInHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  font: var(--heading-font-family);
  color: white;
  background-color: var(--primary-color);
`;

const SignInMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  justify-content: center;
  align-items: center;
`;

const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserInput = styled.textarea`
  flex-basis: 60%;
  height: 60px;
  width: 155px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding-top: 3px;
  flex-basis: 60%;
  height: 50px;
  background-color: var(--primary-color);
  border-style: none;
  color: white;
  width: 160px;
`;

const ErrorPage = styled.div`
  min-height: 1000px;
  min-width: 800px;
  text-align: center;
  font-size: 100px;
  font-weight: bold;
`;
