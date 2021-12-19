import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import {
  CardWrapper,
  TotalCardContainer,
  Card,
  TopHalf,
  ImageBox,
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
} from "./BetDetailsStyled";

const BetDetails = () => {
  // this is to keep company information locally
  const [bet, setBet] = useState("");
  const [status, setStatus] = useState(null);
  // this is the id that we get in the url
  const { id } = useParams();

  // this is to fetch a specific item with the id in the url
  useEffect(() => {
    fetch(`/toppicker/bets/:_id`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBet(data);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  }, []);

  return (
    <CardWrapper>
      <TotalCardContainer>
        <Card to={`/toppicker/bets/${bet._id}`}>
          <TopHalf>
            <ImageBox>
              <AvatarImage src={"Adfadfa"} />
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

export default BetDetails;
