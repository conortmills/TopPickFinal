import React, { useContext } from "react";

import { TopPickerContext } from "../TopPickerContext";

import {
  PageBox,
  EntryDetailsBox,
  EntryBox,
  EntryTitle,
  UserEntry,
} from "./CreateAccountStyled";

const CreateAccount = () => {
  // create fetch for posting account details and making sure username isnt taken already

  const { status, setStatus } = useContext(TopPickerContext);

  const PostAccount = () => {
    fetch("/toppicker/accounts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setNewsFeed(data);
        // setLoading(true);
      })

      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  // if there isnt a match --> post account otherwise return error to user requesting they enter a different name

  fetch("/toppicker/createaccount", {
    method: "POST",
    body: JSON.stringify({
      // status: textValue,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("JSON", json);
      // setUpdateFeed(!updateFeed);
      // setTextValue("");
    })
    .catch((err) => {
      setStatus("error");
      console.log(err);
    });

  return (
    <PageBox>
      <EntryDetailsBox>
        <EntryBox>
          <EntryTitle>Please enter your desired username</EntryTitle>
          <UserEntry />
        </EntryBox>
      </EntryDetailsBox>
    </PageBox>
  );
};

export default CreateAccount;
