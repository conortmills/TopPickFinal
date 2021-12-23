import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileBetCard from "./BetCard";

const ProfileFeed = ({ accountID }) => {
  const [userFeed, setUserFeed] = useState(null);
  console.log(userFeed);

  useEffect(() => {
    fetch(`/toppicker/profile/${accountID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserFeed(data);
      });
  }, []);

  return (
    <UserFe>
      {userFeed && (
        <>
          <UserBetFeed>
            {userFeed.data.map((keyId) => {
              console.log(keyId);
              return <ProfileBetCard bet={keyId} />;
            })}
          </UserBetFeed>
        </>
      )}
    </UserFe>
  );
};

export default ProfileFeed;

const UserFe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 20px;
`;

const UserBetFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: black 1px;
`;
