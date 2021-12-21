import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { TopPickerContext } from "../TopPickerContext";

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
  let history = useHistory();

  // if there isnt a match --> post account otherwise return error to user requesting they enter a different name

  function handleClick() {
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
      <Submit type="button" onClick={handleClick}>
        {" "}
        Create Account
      </Submit>
    </PageBox>
  );
};

export default CreateAccount;
