import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TopPickerContext } from "../TopPickerContext";
import { data } from "./data";

const PlaceBets = () => {
  const [availableBets, setAvailableBets] = useState(null);
  const [activeBet, setActiveBet] = useState(null);
  const [selectedBet, setSelectedBet] = useState(null);
  const [loading, setLoading] = useState(null);
  const [status, setStatus] = useState(null);
  const { currentUser, setCurrentUser } = useContext(TopPickerContext);
  const [profile, setUserProfile] = useState(null);
  // 1. fetch available NBA games to gamble on based off of Date

  const [form, setForm] = useState({
    handle: "",
    accountID: "",
    home_team: "",
    away_team: "",
    spread: "",
    selected_team: "",
    game_time: "",
    timestamp: "",
  });

  console.log(data);

  useEffect(() => {
    fetch(`/toppicker/profile/get/${currentUser}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserProfile(data);

        // setForm({ ...form, handle: data.email });
      });
  }, [currentUser]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=14c8736c45b7057cd5906611f2efe583&regions=us&markets=h2h,spreads&oddsFormat=american"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setNewsFeed(data);
        setAvailableBets(data);
        setLoading(true);
      })

      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  }, []);

  function setGame(bet) {
    setActiveBet(bet);
    console.log(bet.home_team);
    console.log(profile.data.accountID);

    setForm({
      ...form,
      game_time: bet.commence_time,
      away_team: bet.away_team,
      home_team: bet.home_team,
      handle: profile.data[0].handle,
      accountID: profile.data[0]._id,
    });
  }

  function selectBet(team, spread) {
    console.log(form);
    console.log(spread);
    console.log(team);
    var postDate = Date.now();
    var timeStamp = new Date(postDate);
    console.log(timeStamp);
    setForm({
      ...form,
      spread: spread,
      selected_team: team,
      timestamp: timeStamp,
    });
  }

  function lockBet() {
    //   post fetch to user specific data stream

    const createBet = () => {
      fetch("/toppicker/createbet", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("JSON", json);
          console.log(json.id);
        })
        .catch((err) => {
          setStatus("error");
          console.log(err);
        });
    };
    createBet();
    navigate(`/confirmed`);
  }

  function resetBet() {
    setActiveBet(null);
    setForm({
      ...form,
      home_team: "",
      away_team: "",
      game_time: "",
      seleted_team: "",
      spread: "",
    });
  }

  return (
    <div>
      {availableBets && (
        <BetContainer>
          <ButtonMap>
            {availableBets ? (
              availableBets.map((bet) => {
                return (
                  <BetButton type="button" onClick={() => setGame(bet)}>
                    {bet.away_team}@{bet.home_team} {bet.commence_time}
                  </BetButton>
                );
              })
            ) : (
              <div>There was an error, please refresh the page</div>
            )}
          </ButtonMap>
          <BetEntry>
            {activeBet ? (
              <div>
                <TeamBox>
                  <ItemBox
                    type="button"
                    onClick={() =>
                      selectBet(
                        activeBet.home_team,
                        activeBet.bookmakers[0].markets[0].outcomes[1].price
                      )
                    }
                  >
                    <Item>{activeBet.home_team}</Item>
                    <Spread>
                      {activeBet.bookmakers[0].markets[0].outcomes[1].price}
                    </Spread>
                  </ItemBox>
                  <ItemBox
                    type="button"
                    onClick={() =>
                      selectBet(
                        activeBet.away_team,
                        activeBet.bookmakers[0].markets[0].outcomes[0].price
                      )
                    }
                  >
                    <Item>{activeBet.away_team}</Item>
                    <Spread>
                      {activeBet.bookmakers[0].markets[0].outcomes[0].price}
                    </Spread>
                  </ItemBox>
                </TeamBox>
                <ButtonBox>
                  <CommitBet type="button" onClick={() => lockBet()}>
                    Commit Selection
                  </CommitBet>
                  <Reset type="button" onClick={() => resetBet()}>
                    Reset
                  </Reset>
                </ButtonBox>
              </div>
            ) : (
              <Placeholder>Please Select a Bet</Placeholder>
            )}
          </BetEntry>
        </BetContainer>
      )}
    </div>
  );
};

export default PlaceBets;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;
const TeamBox = styled.div`
  display: flex;
  width: 100%;
`;
const BetContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DropdownList = styled.ul``;
const ListItem = styled.li``;
const BetEntry = styled.div`
  display: flex;
  border: black 5px;
  width: 100%;
`;
const ItemBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div``;
const Spread = styled.div``;
const CommitBet = styled.button`
  background-color: green;
  color: white;
`;
const Reset = styled.button`
  background-color: red;
  color: white;
`;
const Placeholder = styled.div`
  font-size: 50px;
  text-align: center;
`;
const ButtonMap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const BetButton = styled.button`
  width: 100%;
`;
