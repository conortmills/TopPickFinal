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
export const BetCard = ({ betID }) => {
  const [bet, setBet] = useState("");

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
  }, []);

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
                account.data.handle
              </UserHandle>
            </UserInfoBox>
            <BetTimeStamp>bet.data.timestamp</BetTimeStamp>
          </TopHalf>
          <BottomHalf>
            <BetDetailsBox>
              <Team1>bet.data.team1 </Team1>
              <Team2>bet.data.team2 </Team2>
              <Spread> bet.data.spread </Spread>
              {/* <SelectedTeamLogo src="bet.data."/> */}
            </BetDetailsBox>
            {/* <UserCommentBox>
            <UserComment>Comment</UserComment>
          </UserCommentBox> */}
            <FollowButton></FollowButton>
          </BottomHalf>
        </Card>
      </TotalCardContainer>
    </CardWrapper>
  );
};
