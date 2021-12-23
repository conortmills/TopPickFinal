import React, { useContext } from "react";
import { Wrapper, WebsiteLogo, NavBox, HomeNav } from "./HeaderStyled";
import LogoutButton from "../LogoutButton";
import { TopPickerContext } from "../TopPickerContext";
//components

import { BsHouseDoor } from "react-icons/bs";

const Header = () => {
  const { accountType, setAccountType } = useContext(TopPickerContext);
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  return (
    <div>
      {accountType && (
        <div>
          <Wrapper>
            {accountType === "consumer" ? (
              <HomeNav to="/homefeed">
                <BsHouseDoor size="lg" />
              </HomeNav>
            ) : (
              <HomeNav to={`/profile/${currentUser}`}>
                <BsHouseDoor size="lg" />
              </HomeNav>
            )}

            <NavBox to="/">
              <WebsiteLogo />
            </NavBox>
            <LogoutButton></LogoutButton>
          </Wrapper>
        </div>
      )}
    </div>
  );
};
export default Header;
