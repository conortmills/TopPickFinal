import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { TopPickerContext } from "../TopPickerContext";
import styled from "styled-components";
import ProfileFeed from "./ProfileFeed";
import {
  AccountDetails,
  Handle,
  Location,
  FavoriteTeam,
  Bio,
  FeedBox,
  UserFeed,
} from "./ProfileStyled";

const Profile = () => {
  const [profile, setUserProfile] = useState(null);
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  const { accountType, setAccountType } = useContext(TopPickerContext);
  const [consumerProfile, setConsumerProfile] = useState(null);
  const [status, setStatus] = useState(null);
  const [following, setFollowing] = useState(null);

  const { accountID } = useParams();
  console.log(accountID);
  console.log(currentUser);
  console.log(accountType);

  useEffect(() => {
    fetch(`/toppicker/profile/get/${accountID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserProfile(data);
      });
  }, [accountID]);

  useEffect(() => {
    fetch(`/toppicker/consumerprofile/get/${currentUser}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setConsumerProfile(data);
      });
  }, [currentUser]);

  function followUser() {
    const follow = () => {
      fetch(`/toppicker/follow/${accountID}`, {
        method: "PUT",
        body: JSON.stringify({ user: currentUser }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("JSON", json);
        })
        .catch((err) => {
          setStatus("error");
          console.log(err);
        });
    };
    follow();
  }

  function unFollowUser() {
    const unFollow = () => {
      fetch(`/toppicker/unfollow/${accountID}`, {
        method: "PUT",
        body: JSON.stringify({ user: currentUser }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("JSON", json);
        })
        .catch((err) => {
          setStatus("error");
          console.log(err);
        });
    };
    unFollow();
  }

  return (
    <div>
      {consumerProfile && (
        <div>
          {profile && (
            <div>
              {accountType && (
                <AccountDetails>
                  <Handle>{profile.data[0].handle}</Handle>
                  <Location>Posting from: {profile.data[0].location}</Location>
                  <FavoriteTeam>{profile.data[0].favteam}</FavoriteTeam>
                  <Bio>Bio: {profile.data[0].bio}</Bio>
                  {accountType === "picker" ? (
                    <div>
                      <div>This is your profile</div>
                      <PlaceNewBet to="/place-bet">
                        Place a new bet!
                      </PlaceNewBet>
                    </div>
                  ) : consumerProfile.data[0].following.find((account) => {
                      var betMaker = profile.data[0].accountID;
                      console.log(betMaker);
                      return betMaker
                        .toLowerCase()
                        .includes(account.toLowerCase());
                    }) ? (
                    <FollowButton onClick={() => unFollowUser()}>
                      unfollow
                    </FollowButton>
                  ) : (
                    <FollowButton onClick={() => followUser()}>
                      Follow
                    </FollowButton>
                  )}
                </AccountDetails>
              )}
            </div>
          )}
          <FeedTitle>{profile.data[0].handle}'s Bets- </FeedTitle>
          <FeedBox>
            <ProfileFeed accountID={accountID} />
          </FeedBox>
        </div>
      )}
    </div>
  );
};

const FeedTitle = styled.div`
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
`;
const FollowButton = styled.button``;
const UnFollowButton = styled.button``;

const PlaceNewBet = styled(Link)``;

export default Profile;
