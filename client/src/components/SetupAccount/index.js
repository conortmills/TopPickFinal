import React, { useState } from "react";
import styled from "styled-components";

const SetupAccount = () => {
  const submitProfile = () => {
    // create new profile entry in database
  };

  const cancelCreation = () => {
    // set edit mode back to false
  };

  return (
    <ProfileForm>
      <div>Please enter your profile details - these can be updated later</div>
      <DisplayName>
        <SectionName>Display name:</SectionName>
        <TextEntry value="Enter your desired display name" required></TextEntry>
      </DisplayName>
      <Location>
        <SectionName>Location:</SectionName>

        <TextEntry value="Enter your desired location"></TextEntry>
      </Location>
      <ProfileLine>
        <SectionName>One Liner:</SectionName>

        <TextEntry value="Enter your desired one liner"></TextEntry>
      </ProfileLine>
      <FavoriteTeam>
        <SectionName>Favorite Sports Team</SectionName>

        <TextEntry value="Enter your desired location"></TextEntry>
      </FavoriteTeam>
      <div>
        <SubmitChanges onClick={submitProfile()}>
          Submit Profile Details
        </SubmitChanges>
      </div>
    </ProfileForm>
  );
};

export default SetupAccount;

const ProfileForm = styled.div``;
const DisplayName = styled.div``;
const ProfileLine = styled.div``;
const FavoriteTeam = styled.div``;
const Location = styled.div``;
const SectionName = styled.div``;
const TextEntry = styled.textarea``;
const SubmitChanges = styled.button``;
