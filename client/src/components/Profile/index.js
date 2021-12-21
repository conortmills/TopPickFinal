import React from "react";
import { useParams } from "react-router-dom";
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
  const [profile, setUserProfile] = null;

  const { accountID } = useParams();

  useEffect(() => {
    fetch(`/toppicker/profile/get/${accountID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserProfile(data);
      });
  }, []);

  return (
    <div>
      <AccountDetails>
        <Handle>profile.handle</Handle>
        <Location>profile.location</Location>
        <FavoriteTeam>profile.favoriteteam</FavoriteTeam>
        <Bio>profile.bio</Bio>
      </AccountDetails>
      <FeedBox>
        <UserFeed accountID={accountID} />
      </FeedBox>
    </div>
  );
};

export default Profile;
