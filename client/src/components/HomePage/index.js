import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { FiLoader } from "react-icons/fi";
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

  const { status, setStatus } = useContext();
  // CurrentUserContext
  const [updateFeed, setUpdateFeed] = useState(false);
  const [betFeed, setBedFeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [homeFeed, setHomeFeed] = useState(null);
  const {
    state: { items },
    actions: { changeOffsetNumber },
  } = useContext(TopPickerContext);

  //function responsible for calling context function which leads to the fetching of 6 additional items
  const HandleClick = () => {
    changeOffsetNumber();
  };

  // console.log(userAvatar);
  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setNewsFeed(data);
        setLoading(true);
      })

      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  }, [updateFeed]);
  //Establishes dynamic flexboxes for rendering items received from database
  return (
    <div>
      {loading ? (
        status === "error" ? (
          <GetErrorScreen />
        ) : (
          <FeedBox>
            {homeFeed && (
              <>
                <BetFeed>
                  {homeFeed.tweetIds.map((keyId) => {
                    return <BetCard tweetId={homeFeed.tweetsById[keyId]} />;
                  })}
                </BetFeed>
              </>
            )}
          </FeedBox>
        )
      ) : (
        <LoadingBox>
          <FiLoader style={{ fontSize: "50px" }} />
        </LoadingBox>
      )}
    </div>
  );
};
export default HomePage;

const FeedBox = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
`;

const BetFeed = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
`;

const ErrorMessage = styled.div`
  padding-top: 20px;
  font-weight: bold;
  font-size: 40px;
  padding-bottom: 30px;
`;

const SupportLink = styled.div`
  padding-right: 3px;
  padding-left: 3px;
  color: blue;
  text-decoration: underline;
`;

const SupportMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LoadingBox = styled.div`
  display: flex;
  width: 800px;
  height: 200px;
  align-items: center;
  justify-content: center;
`;
