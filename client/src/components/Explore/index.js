import React, { useEffect } from "react";

import {
  ExploreContainer,
  Welcome,
  ProfileFeedContainer,
} from "./ExploreStyled";

const Explore = () => {
  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setNewsFeed(data);
        // setLoading(true);
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
        <ProfileFeedContainer></ProfileFeedContainer>
      </ExploreContainer>
    </div>
  );
};

export default Explore;
