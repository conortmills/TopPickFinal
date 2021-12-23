import React from "react";
// import { Link } from "react-router-dom";

//component imports
import {
  CardWrapper,
  TotalCardContainer,
  Card,
  ImageBox,
  TopHalf,
  AvatarImage,
  UserInfoBox,
  UserDisplayName,
  BetTimeStamp,
  BottomHalf,
  BetDetailsBox,
  Matchup,
  Spread,
  SelectedTeamLogo,
  UserCommentBox,
  UserComment,
} from "./ProfileStyled";

import styled from "styled-components";

//component responsible for rendering cards on the homepage based off of data accessed from the DB
//component functions as link to item details
const ProfileBetCard = ({ bet }) => {
  // useEffect(() => {
  //   fetch(`/toppicker/bets/${betID}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBet(data);
  //     })
  //     .catch((err) => {
  //       setStatus("error");
  //       console.log(err);
  //     });
  // }, []);

  return (
    <CardWrapper>
      <TotalCardContainer>
        <Card>
          <TopHalf>
            {/* <ImageBox>
              <AvatarImage src={"Adfadfa"} />
            </ImageBox> */}
            {/* <UserInfoBox>
              <UserHandle to={`/profile/${bet._id}`}>{bet.handle}</UserHandle>
            </UserInfoBox> */}
            <BetTimeStamp>Bet Created: {bet.timestamp}</BetTimeStamp>
          </TopHalf>
          <BottomHalf>
            <BetDetailsBox>
              <TeamBox>
                {bet.away_team === bet.selected_team ? (
                  <SelectedTeam>{bet.away_team}</SelectedTeam>
                ) : (
                  <Team1>{bet.away_team} </Team1>
                )}
                @
                {bet.home_team === bet.selected_team ? (
                  <SelectedTeam>{bet.home_team}</SelectedTeam>
                ) : (
                  <Team1>{bet.home_team} </Team1>
                )}
              </TeamBox>
              <BetDate>Game is on: {bet.game_time}</BetDate>
              <Spread> {bet.spread} </Spread>
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

export default ProfileBetCard;

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
// const UserHandle = styled(Link)``;
