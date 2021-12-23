import React, { useState, useEffect, useContext } from "react";
import { FollowButton } from "../BetDetails/BetDetailsStyled";
import { TopPickerContext } from "../TopPickerContext";
import { Link } from "react-router-dom";

import {
  CardWrapper,
  AccountDetails,
  Handle,
  Location,
  FavoriteTeam,
  Bio,
} from "./ExploreStyled";

const ProfileCard = ({ accountID }) => {
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  const [status, setStatus] = useState(null);
  const [profile, setUserProfile] = useState(null);

  useEffect(() => {
    fetch(`/toppicker/profile/get/${accountID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserProfile(data);
      });
  }, []);

  // function followUser() {
  //   const follow = () => {
  //     fetch(`/toppicker/follow/${profile.data.accountID}`, {
  //       method: "PUT",
  //       body: JSON.stringify(currentUser),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log("JSON", json);
  //       })
  //       .catch((err) => {
  //         setStatus("error");
  //         console.log(err);
  //       });
  //   };
  //   follow();
  // }

  return (
    <CardWrapper>
      {profile && (
        <div>
          <AccountDetails>
            <Link to={`/profile/${profile.data[0]._id}`}>
              {profile.data[0].handle}
            </Link>
            <Location>Location: {profile.data[0].location}</Location>
            <FavoriteTeam>
              Favorite Sports Team: {profile.data[0].favTeam}
            </FavoriteTeam>
            <Bio>Bio: {profile.data[0].bio}</Bio>
          </AccountDetails>

          {/* <FollowButton onClick={followUser()}>Follow</FollowButton> */}
        </div>
      )}
    </CardWrapper>
  );
};

export default ProfileCard;
