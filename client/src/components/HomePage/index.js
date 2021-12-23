import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";
//context import
import { TopPickerContext } from "../TopPickerContext";

//styled components import
import GetErrorScreen from "../GetErrorScreen/Index";
import {
  Wrapper,
  ClothingBanner,
  PageWrapper,
  MarginBox,
  DisplayBox,
} from "./HomePageStyled";
//components import
import { BetCard } from "./BetCard";
import { LoadMore } from "./LoadMoreButton";
const HomePage = () => {
  //receive items from context. Also receiving function for incrementing the offset when 'load more' button is clicked

  // const { status, setStatus } = useContext();
  // CurrentUserContext
  // const [updateFeed, setUpdateFeed] = useState(false);
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  const { accountType, setAccountType } = useContext(TopPickerContext);
  const [betFeed, setBetFeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [following, setFollowing] = useState([]);
  const [status, setStatus] = useState("");
  const [userProfile, setUserProfile] = useState("");

  const { accountID } = useParams();
  console.log(currentUser);
  let checked = false;
  useEffect(() => {
    fetch("/toppicker/bets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setNewsFeed(data);
        setBetFeed(data);
        setLoading(true);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  }, [currentUser]);

  useEffect(() => {
    fetch(`/toppicker/consumerprofile/get/${currentUser}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserProfile(data);
      });
  }, [currentUser]);

  //Establishes dynamic flexboxes for rendering items received from database
  return (
    <div>
      {userProfile && (
        <PageBox>
          <StyledExplore to="/explore">EXPLORE</StyledExplore>
          <Greeting>Hello, {userProfile.data[0].username}</Greeting>
          {betFeed && (
            <FeedBox>
              <TheFeed>YOUR FEED</TheFeed>
              <BetFeed>
                {betFeed.data.map((bet) => {
                  var betMaker = bet.accountID;
                  console.log(betMaker);
                  console.log(userProfile.data[0].following.length);
                  if (
                    userProfile.data[0].following.length === 0 &&
                    checked === false
                  ) {
                    checked = true;
                    return (
                      <NoBets>
                        You are not following anyone, please head to explore to
                        start your feed!
                      </NoBets>
                    );
                  } else if (
                    userProfile.data[0].following.find((account) => {
                      console.log("whatsgood");
                      console.log(account);
                      console.log(bet);
                      console.log(betMaker);
                      return betMaker
                        .toLowerCase()
                        .includes(account.toLowerCase());
                    })
                  ) {
                    // {
                    //   console.log("check");
                    //   console.log(bet._id);
                    // }
                    return <BetCard betID={bet._id} />;
                  }
                })}
              </BetFeed>
            </FeedBox>
          )}
        </PageBox>
      )}
    </div>
  );
};
export default HomePage;

const TheFeed = styled.div`
  text-align: center;
  font-size: 30px;
  border-bottom: solid 9px;
  margin-bottom: 40px;
`;

const NoBets = styled.div`
  font-size: 20px;
`;

const Greeting = styled.div`
  font-size: 50px;
  border: none;
`;

const StyledExplore = styled(Link)`
  font-size: 40px;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  border: solid 4px;
`;

const PageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeedBox = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
`;

const BetFeed = styled.div`
  display: flex;
  flex-direction: column;
`;
