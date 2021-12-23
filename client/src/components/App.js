import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import BetDetails from "./BetDetails";
import EditProfile from "./EditProfile";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
import SetupAccount from "./SetupAccount";
import Profile from "./Profile";
import Explore from "./Explore";
import PlaceBets from "./PlaceBets";
import AccountChoice from "./AccountChoice";
import CreateConsumerAccount from "./CreateConsumerAccount";

//style
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Confirmation from "./Confirmattion";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route exact path="/place-bet" element={<PlaceBets />}></Route>
          <Route
            exact
            path="/create-consumer-account"
            element={<CreateConsumerAccount />}
          ></Route>
          <Route exact path="/confirmed" element={<Confirmation />}></Route>
          <Route
            exact
            path="/account-choice"
            element={<AccountChoice />}
          ></Route>
          <Route
            exact
            path="/create-picker-account"
            element={<CreateAccount />}
          ></Route>
          <Route exact path="/setup-account" element={<SetupAccount />}></Route>
          <Route
            exact
            path="/bet-details/:accountID"
            element={<BetDetails />}
          ></Route>
          <Route exact path="/edit-profile" element={<EditProfile />}></Route>
          <Route exact path="/profile/:accountID" element={<Profile />}></Route>
          <Route exact path="/explore" element={<Explore />}></Route>
          <Route exact path="/homefeed" element={<HomePage />}></Route>
          <Route exact path="/place-bet" element={<PlaceBets />}></Route>
        </Routes>
      </Main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
const Main = styled.div`
  /* position: relative;
  display: flex;
  flex-direction: column; */
`;
export default App;
