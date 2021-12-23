import React, { useContext, useState } from "react";

import { TopPickerContext } from "../TopPickerContext";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  PageBox,
  EntryDetailsBox,
  EntryBox,
  EntryTitle,
  UserEntry,
  Submit,
} from "./CreateAccountStyled";

const CreateAccount = () => {
  // create fetch for posting account details and making sure username isnt taken already

  const { status, setStatus } = useContext(TopPickerContext);
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { accountType, setAccountType } = useContext(TopPickerContext);
  // const [user, setUser] = useState(null);

  console.log(user);

  const [form, setForm] = useState({
    handle: "",
    favTeam: "",
    bio: "",
    location: "",
    email: "",
    accountType: "picker",
  });

  // if there isnt a match --> post account otherwise return error to user requesting they enter a different name

  let navigate = useNavigate();
  console.log(form);

  function handleClick() {
    setForm({ ...form, email: user.email });
    console.log(form);
    const addAccount = () => {
      fetch("/toppicker/createPickerAccount", {
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
          navigate(`/profile/${json.id}`);
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
            <EntryTitle>Please enter your desired display handle</EntryTitle>
            <UserEntry
              placeholder="your display handle"
              type="text"
              onChange={(ev) => {
                setForm({ ...form, handle: ev.target.value });
              }}
            ></UserEntry>
          </EntryBox>
          <EntryBox>
            <EntryTitle>Where are you picking from?</EntryTitle>
            <UserEntry
              placeholder="your locations"
              type="text"
              onChange={(ev) => {
                setForm({ ...form, location: ev.target.value });
              }}
            ></UserEntry>
          </EntryBox>
          <EntryBox>
            <EntryTitle>Please enter your favorite sports team</EntryTitle>
            <UserEntry
              placeholder="eg. MontrealCanadiens"
              type="text"
              onChange={(ev) => {
                setForm({ ...form, favTeam: ev.target.value });
              }}
            ></UserEntry>
          </EntryBox>
          <EntryBox>
            <EntryTitle>Please enter your bio</EntryTitle>
            <UserEntry
              placeholder="eg. float like a butterfly sting like a bee"
              type="text"
              onChange={(ev) => {
                setForm({ ...form, bio: ev.target.value });
              }}
            ></UserEntry>
            <Submit type="button" onClick={() => handleClick()}>
              Create Account
            </Submit>
          </EntryBox>
        </EntryDetailsBox>
      </PageBox>
    )
  );
};

export default CreateAccount;
