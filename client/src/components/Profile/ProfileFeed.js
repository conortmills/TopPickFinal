import React, { useState, useEffect } from "react";
import Tweet from "./Tweet.js";
import styled from "styled-components";

const UserFeed = (userHandleFeed) => {
  const [userFeed, setUserFeed] = useState(null);
  console.log(userHandleFeed.userHandleFeed);
  useEffect(() => {
    fetch(`/api/${userHandleFeed.userHandleFeed}/feed`)
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
          <UserTweetFeed>
            {userFeed.tweetIds.map((keyId) => {
              return <Tweet tweetId={userFeed.tweetsById[keyId]} />;
            })}
          </UserTweetFeed>
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

const UserTweetFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;
