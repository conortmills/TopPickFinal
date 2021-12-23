import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopPickerContext } from "../TopPickerContext";
import { useAuth0 } from "@auth0/auth0-react";

import {
  PageBox,
  EntryDetailsBox,
  EntryBox,
  EntryTitle,
  UserEntry,
  Submit,
} from "./CreateConsumerAccountStyled";

const CreateConsumerAccount = () => {
  // create fetch for posting account details and making sure username isnt taken already
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { status, setStatus } = useContext(TopPickerContext);
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  const { accountType, setAccountType } = useContext(TopPickerContext);
  const [form, setForm] = useState({
    username: "",
    email: "",
    accountType: "consumer",
    following: [],
  });
  let navigate = useNavigate();

  // if there isnt a match --> post account otherwise return error to user requesting they enter a different name

  function handleClick() {
    setForm({ ...form, email: user.email });
    console.log(form);
    const addAccount = () => {
      fetch("/toppicker/createConsumerAccount", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("JSON", json);
          console.log(json.id);
          setCurrentUser(json.id);
          setAccountType(form.accountType);
          console.log(currentUser);
          navigate(`/homefeed`);
        })
        .catch((err) => {
          setStatus("error");
          console.log(err);
        });
    };

    addAccount();
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <PageBox>
        <EntryDetailsBox>
          <EntryBox>
            <EntryTitle>Please enter your desired username</EntryTitle>
            <UserEntry
              placeholder="your username"
              type="text"
              onChange={(ev) => {
                setForm({ ...form, username: ev.target.value });
              }}
            ></UserEntry>
          </EntryBox>
        </EntryDetailsBox>
        <Submit type="button" onClick={() => handleClick()}>
          Create Account
        </Submit>
      </PageBox>
    )
  );
};

export default CreateConsumerAccount;
