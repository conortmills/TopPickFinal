import React, { useState, useEffect } from "react";
import Tweet from "./Tweet.js";
import styled from "styled-components";
import { BetCard } from "../HomePage/BetCard.js";

const UserFeed = (accountID) => {
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
            {userFeed.map((keyId) => {
              return <BetCard betID={keyId._id} />;
            })}
          </UserBetFeed>
        </>
      )}
    </UserFe>
  );
};

export default UserFeed;

const UserFe = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

const UserBetFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;
