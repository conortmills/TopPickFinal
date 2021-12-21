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

  useEffect(() => {
    fetch(`/toppicker/profile/get/${bet.data.accountID}.`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAccount(data);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  }, [bet]);

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

export default BetDetails;
