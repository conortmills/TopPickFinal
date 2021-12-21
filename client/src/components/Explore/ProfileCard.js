import React, { useState } from "react";

import {
  CardWrapper,
  AccountDetails,
  Handle,
  Location,
  FavoriteTeam,
  Bio,
} from "./ExploreStyled";

const ProfileCard = ({ accountID }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`/toppicker/profile/get/${accountID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserProfile(data);
      });
  }, []);

  return (
    <CardWrapper>
      <AccountDetails>
        <Handle>profile.handle</Handle>
        <Location>profile.location</Location>
        <FavoriteTeam>profile.favoriteteam</FavoriteTeam>
      </AccountDetails>
      <Bio>profile.bio</Bio>
    </CardWrapper>
  );
};
