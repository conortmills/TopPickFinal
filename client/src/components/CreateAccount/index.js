import React, { useContext, useState } from "react";

import { TopPickerContext } from "../TopPickerContext";
import { useHistory } from "react-router-dom";

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

  const [form, setForm] = useState({
    handle: "",
    favTeam: "",
    bio: "",
    location: "",
  });

  // if there isnt a match --> post account otherwise return error to user requesting they enter a different name

  let history = useHistory();
  console.log(form);

  function handleClick() {
    const addReservation = () => {
      fetch("/reservation", {
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
          // setReservation(json.id);
          // sessionStorage.setItem("reservationId", JSON.stringify(json.id));
          //set up local storage --> storing id only, to be accessed ont he reservation page
        })
        .catch((err) => {
          setStatus("error");
          console.log(err);
        });
    };

    // addReservation();
    history.push(`/confirmed`);
  }

  return (
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
          <Submit type="button" onClick={handleClick}>
            Create Account
          </Submit>
        </EntryBox>
      </EntryDetailsBox>
    </PageBox>
  );
};

export default CreateAccount;
