import React from "react";
import { Wrapper, WebsiteLogo, NavBox, HomeNav } from "./HeaderStyled";
//components

import { BsHouseDoor } from "react-icons/bs";
// import logo from "/Logo_alternate_color.png";

//Create header component with home icon functioning as a to home link, website logo also functioning as a home link,
// and cart ico functioning as a link to the cart

const Header = (cartCount) => {
  return (
    <Wrapper>
      <HomeNav to="/">
        <BsHouseDoor size="lg" />
      </HomeNav>
      <NavBox to="/">
        <WebsiteLogo src="/foabtLogo.png" />
      </NavBox>
    </Wrapper>
  );
};
export default Header;
