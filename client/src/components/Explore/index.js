import React, { useEffect, useContext, useState } from "react";
import ProfileCard from "./ProfileCard";
import { TopPickerContext } from "../TopPickerContext";

import {
  ExploreContainer,
  Welcome,
  ProfileFeedContainer,
} from "./ExploreStyled";

const Explore = () => {
  const [exploreFeed, setExploreFeed] = useState(null);
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  const [userProfile, setUserProfile] = useState("");

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

  useEffect(() => {
    fetch(`/toppicker/consumerprofile/get/${currentUser}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserProfile(data);
      });
  }, [currentUser]);

  return (
    <div>
      {userProfile && (
        <div>
          {exploreFeed && (
            <ExploreContainer>
              <Welcome>
                Hey here are some accounts we think you should check out-
              </Welcome>
              <ProfileFeedContainer>
                {userProfile.data[0].following.length === 0
                  ? exploreFeed.data.map((account) => {
                      console.log(account);
                      console.log(userProfile);
                      console.log(account._id);
                      return <ProfileCard accountID={account._id} />;
                    })
                  : exploreFeed.data.map((account) => {
                      console.log(account);
                      console.log(userProfile);
                      if (
                        userProfile.following.find((account) => {
                          var betMaker = account._id;
                          return betMaker
                            .toLowerCase()
                            .includes(account.toLowerCase());
                        })
                      ) {
                        <div></div>;
                      } else {
                        <ProfileCard accountID={account.accountID} />;
                      }
                    })}
              </ProfileFeedContainer>
            </ExploreContainer>
          )}
        </div>
      )}
    </div>
  );
};

export default Explore;
