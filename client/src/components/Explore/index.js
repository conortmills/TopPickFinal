import React, { useEffect } from "react";

import {
  ExploreContainer,
  Welcome,
  ProfileFeedContainer,
} from "./ExploreStyled";

const Explore = () => {
  const [exploreFeed, setExploreFeed] = [];

  useEffect(() => {
    fetch("/toppicker/accounts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExploreFeed(data);
      })

      .catch((err) => {
        // setStatus("error");
        console.log(err);
      });
  });

  return (
    <div>
      <ExploreContainer>
        <Welcome>
          Hey $$$NAME$$$ here are some accounts we think you should check out
        </Welcome>
        <ProfileFeedContainer>
          {exploreFeed.accounts.map((accountID) => {
            return <ProfileCard accountID={accountID} />;
          })}
        </ProfileFeedContainer>
      </ExploreContainer>
    </div>
  );
};

export default Explore;
