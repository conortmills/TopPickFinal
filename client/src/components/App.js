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

//style
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route
            exact
            path="/create-account"
            element={<CreateAccount />}
          ></Route>
          <Routes>
          <Route exact path="/account-choice" element={<AccountChoice />}></Route>
          <Route
            exact
            path="/create-account"
            element={<CreateAccount />}
          ></Route>
          <Route exact path="/setup-account" element={<SetupAccount />}></Route>
          <Route
            exact
            path="/bet-details/:_id"
            element={<BetDetails />}
          ></Route>
          <Route exact path="/edit-profile" element={<EditProfile />}></Route>
          <Route exact path="/profile/:_id" element={<Profile />}></Route>
          <Route exact path="/explore" element={<Explore />}></Route>
          <Route exact path="/homefeed" element={<HomePage />}></Route>
          <Route exact path="/place-bets" element={<PlaceBets />}></Route>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}
const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export default App;
