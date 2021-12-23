import React, { useState } from "react";

import {
  ProfileForm,
  DisplayName,
  ProfileLine,
  FavoriteTeam,
  Location,
  SectionName,
  TextEntry,
  Entry,
  SubmitChanges,
  CancelChanges,
  Edit,
} from "./EditProfileStyled";

const EditProfile = () => {
  const [editMode, setEditMode] = useState(false);

  const activeProfile = {};

  const editProfile = () => {
    setEditMode(true);
  };

  const updateProfile = () => {
    // make change to current profile in data base
    // set edit mode back to false
  };

  const cancelChanges = () => {
    // set edit mode back to false
  };

  return (
    <ProfileForm>
      <DisplayName>
        <SectionName>Display name:</SectionName>
        {editMode === true ? (
          <TextEntry></TextEntry>
        ) : (
          <Entry> {activeProfile.favoriteTeam}</Entry>
        )}
      </DisplayName>
      <Location>
        <SectionName>Location:</SectionName>
        {editMode === true ? (
          <TextEntry value={activeProfile.favoriteTeam}></TextEntry>
        ) : (
          <Entry> {activeProfile.favoriteTeam}</Entry>
        )}
      </Location>
      <ProfileLine>
        <SectionName>One Liner:</SectionName>
        {editMode === true ? (
          <TextEntry value={activeProfile.favoriteTeam}></TextEntry>
        ) : (
          <Entry> {activeProfile.favoriteTeam}</Entry>
        )}
      </ProfileLine>
      <FavoriteTeam>
        <SectionName>Favorite Sports Team</SectionName>
        {editMode === true ? (
          <TextEntry value={activeProfile.favoriteTeam}></TextEntry>
        ) : (
          <Entry> {activeProfile.favoriteTeam}</Entry>
        )}
      </FavoriteTeam>
      {editMode === true ? (
        <div>
          <SubmitChanges onClick={updateProfile()}>
            Submit Changes
          </SubmitChanges>
          <CancelChanges onClick={cancelChanges()}>
            Cancel Changes
          </CancelChanges>
        </div>
      ) : (
        <Edit onClick={editProfile()}>Edit Profile</Edit>
      )}
    </ProfileForm>
  );
};

export default EditProfile;
