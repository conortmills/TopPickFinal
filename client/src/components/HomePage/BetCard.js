import React from "react";
//component imports
import {
  CardWrapper,
  TotalCardContainer,
  Card,
  ImageBox,
  TopHalf,
  AvatarImage,
  UserInfoBox,
  UserHandle,
  UserDisplayName,
  BetTimeStamp,
  BottomHalf,
  BetDetailsBox,
  Matchup,
  Spread,
  SelectedTeamLogo,
  UserCommentBox,
  UserComment,
} from "./HomePageStyled";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

//component responsible for rendering cards on the homepage based off of data accessed from the DB
//component functions as link to item details
export const BetCard = ({ item }) => {
  return (
    <CardWrapper>
      <TotalCardContainer>
        <Card to={`/toppicker/bets/${item._id}`}>
          <TopHalf>
            <ImageBox>
              <AvatarImage src={"sdfa"} />
            </ImageBox>
            <UserInfoBox>
              <UserHandle>User Handle</UserHandle>
              <UserDisplayName>User Display Name</UserDisplayName>
            </UserInfoBox>
            <BetTimeStamp>Time Stamp</BetTimeStamp>
          </TopHalf>
          <BottomHalf>
            <BetDetailsBox>
              <Matchup>Match up </Matchup>
              <Spread> Spread </Spread>
              <SelectedTeamLogo />
            </BetDetailsBox>
            <UserCommentBox>
              <UserComment>Comment</UserComment>
            </UserCommentBox>
          </BottomHalf>
        </Card>
      </TotalCardContainer>
    </CardWrapper>
  );
};
