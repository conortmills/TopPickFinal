import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { Wrapper, Title, Main, Button } from "./styled-components";
import { LoadMore } from "../HomePage/LoadMoreButton";
import { Link } from "react-router-dom";
import { TopPickerContext } from "../TopPickerContext";
const Confirmation = () => {
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  return (
    <Wrapper>
      <Main>
        <Text>Your bet has been added to your feed!</Text>
        <Options>Please choose what you would like to do now</Options>
        <Option1 to={`/place-bet`}>Place another bet</Option1>
        <Option2 to={`/profile/${currentUser}`}>Return to your profile</Option2>
      </Main>
    </Wrapper>
  );
};

const Text = styled.div``;
const Options = styled.div``;
const Option1 = styled(Link)``;
const Option2 = styled(Link)``;

export default Confirmation;
