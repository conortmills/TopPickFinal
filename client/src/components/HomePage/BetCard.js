import React, { useState, useEffect } from "react";
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

import { Link } from "react-router-dom";
import styled from "styled-components";

//component responsible for rendering cards on the homepage based off of data accessed from the DB
//component functions as link to item details
export const BetCard = ({ betID }) => {
  const [bet, setBet] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch(`/toppicker/bets/${betID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBet(data);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  }, [betID]);

  return (
    <CardWrapper>
      {bet && (
        <TotalCardContainer>
          <Card>
            <TopHalf>
              {/* <ImageBox>
              <AvatarImage src={"Adfadfa"} />
            </ImageBox> */}
              <UserInfoBox>
                <UserHandle>{bet.data.handle}</UserHandle>
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
                  {bet.data.home_team === bet.selected_team ? (
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
      )}
    </CardWrapper>
  );
};
const TeamBox = styled.div`
  display: flex;
  font-size: 25px;
`;
const SelectedTeam = styled.div`
  text-decoration: underline;
  font-weight: bold;
  color: darkblue;
`;
const Team1 = styled.div``;
const BetDate = styled.div`
  font-size: 25px;
`;
