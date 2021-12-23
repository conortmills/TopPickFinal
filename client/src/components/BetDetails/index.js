import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

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
  Team1,
  Team2,
  FollowButton,
  Matchup,
  Spread,
  SelectedTeamLogo,
  UserCommentBox,
  UserComment,
} from "./BetDetailsStyled";

const BetDetails = () => {
  // this is to keep company information locally
  const [bet, setBet] = useState("");
  const [account, setAccount] = useState("");
  const [status, setStatus] = useState(null);
  // this is the id that we get in the url
  const { id } = useParams();

  // this is to fetch a specific item with the id in the url
  useEffect(() => {
    fetch(`/toppicker/bets/${id}`)
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

  function followUser() {
    const follow = () => {
      fetch(`/toppicker/follow/${bet.data.accountID}`, {
        method: "PUT",
        body: JSON.stringify,
      });
    };
  }

  return (
    <CardWrapper>
      <TotalCardContainer>
        <Card>
          <TopHalf>
            {/* <ImageBox>
              <AvatarImage src={"Adfadfa"} />
            </ImageBox> */}
            <UserInfoBox>
              <UserHandle to={`/profile/${bet.data.accountID}`}>
                {bet.data.handle}
              </UserHandle>
            </UserInfoBox>
            <BetTimeStamp>{bet.data.timestamp}</BetTimeStamp>
          </TopHalf>
          <BottomHalf>
            <BetDetailsBox>
              <TeamBox>
                {bet.data.away_team === bet.data.selected_team ? (
                  <SelectedTeam>{bet.data.away_team}</SelectedTeam>
                ) : (
                  <Team1>{bet.data.away_team} </Team1>
                )}
                @
                {bet.data.home_team === bet.data.selected_team ? (
                  <SelectedTeam>{bet.data.home_team}</SelectedTeam>
                ) : (
                  <Team1>{bet.data.home_team} </Team1>
                )}
              </TeamBox>
              <Spread> {bet.data.spread} </Spread>
              {/* <SelectedTeamLogo src="bet.data."/> */}
            </BetDetailsBox>
            {/* <UserCommentBox>
              <UserComment>Comment</UserComment>
            </UserCommentBox> */}
          </BottomHalf>
        </Card>
      </TotalCardContainer>
    </CardWrapper>
  );
};

const TeamBox = styled.div``;
const SelectedTeam = styled.div``;

export default BetDetails;
