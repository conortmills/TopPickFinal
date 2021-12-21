import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: var(--font-body);
`;

export const AvatarImage = styled.img`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
export const ImageBox = styled.div`
  height: 600px;
  width: 700px;
  border: 1px;
`;

export const DescriptionBox = styled.div`
  height: 600px;
  width: 800px;
  border: 1px;
  margin-top: 15px;
  margin-left: 100px;
  background-color: rgba(49, 165, 157, 0.8);
  color: transparent;
  border-radius: 10px;
`;

export const ItemName = styled.div`
  color: white;
  font-size: 30px;
  margin-top: 10px;
  margin-left: 15px;
  position: relative;
  border-bottom: 2px solid black;
`;
export const ItemSku = styled.div`
  color: white;
  font-size: 30px;
  margin-top: 20px;
  margin-left: 15px;
`;

export const ItemPrice = styled.div`
  color: white;
  margin-top: 20px;
  margin-left: 15px;
  font-size: 30px;
  font-weight: bold;
`;

export const ItemLocation = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 30px;
  margin-left: 15px;
`;

export const ItemCategory = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 30px;
  margin-left: 15px;
`;

export const ItemCompany = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 30px;
  margin-left: 15px;
`;

export const ItemCompanyLink = styled.a`
  margin-left: 5px;
  color: white;
`;

export const ItemNumStock = styled.div`
  margin-top: 20px;
  font-size: 30px;
  margin-left: 15px;
`;

export const ItemButton = styled.div`
  margin-top: 20px;
  font-size: 30px;
  margin-left: 15px;
`;

export const Span = styled.span`
  font-size: 30px;
  margin-left: 5px;
`;

export const Team1 = styled.div``;
export const Team2 = styled.div``;
export const FollowButton = styled.button``;
export const CardWrapper = styled.div``;
export const TotalCardContainer = styled.div``;
export const Card = styled.div``;
export const TopHalf = styled.div``;

export const UserInfoBox = styled.div``;
export const UserHandle = styled(NavLink)``;
export const UserDisplayName = styled.div``;
export const BetTimeStamp = styled.div``;
export const BottomHalf = styled.div``;
export const BetDetailsBox = styled.div``;
export const Matchup = styled.div``;
export const Spread = styled.div``;
export const SelectedTeamLogo = styled.image``;
export const UserCommentBox = styled.div``;
export const UserComment = styled.div``;
