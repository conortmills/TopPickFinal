import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PlaceBets = () => {
  const [availableBets, setAvailableBets] = useState(null);
  const [activeBet, setActiveBet] = useState(null);
  const [selectedBet, setSelectedBet] = useState(null);
  // 1. fetch available NBA games to gamble on based off of Date

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

  // 2. establish date range

  // const selectBet = () => {
  //   //   set bet selection
  // };

  // const getBet = (bet) => {
  //   // betId = bet;
  //   // fetch specific bet details
  // };

  const lockBet = () => {
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
          // setReservation(json.id);
          // sessionStorage.setItem("reservationId", JSON.stringify(json.id));
          //set up local storage --> storing id only, to be accessed ont he reservation page
        })
        .catch((err) => {
          setStatus("error");
          console.log(err);
        });
    };
  };

  // const resetBet = () => {
  //   // resets betting card to select game
  // };

  return (
    <div>
      <BetContainer>
        <ButtonMap>
          {availableBets ? (
            (availableBets.map = (bet) => {
              return (
                <BetButton onClick={setActiveBet(bet)}>
                  {bet.away_team}@{bet.home_team} {bet.commence_time}
                </BetButton>
              );
            })
          ) : (
            <ListItem> Please select a date</ListItem>
          )}
        </ButtonMap>
        <BetEntry>
          {activeBet ? (
            <div>
              <ItemBox>
                <Item onClick={selectBet()}>{activeBet.home_team}</Item>
                <Spread>
                  {activeBet.bookmakers[0].markets[0].outcomes[1].price}
                </Spread>
              </ItemBox>
              <ItemBox>
                <Item onClick={selectBet()}>{activeBet.away_team}</Item>
                <Spread>
                  {activeBet.bookmakers[0].markets[0].outcomes[0].price}
                </Spread>
              </ItemBox>
              <CommitBet onClick={lockBet()}>Commit Selection</CommitBet>{" "}
              <Reset onClick={resetBet()}></Reset>
            </div>
          ) : (
            <Placeholder>Please Select a Bet</Placeholder>
          )}
        </BetEntry>
      </BetContainer>
    </div>
  );
};

export default PlaceBets;

const BetContainer = styled.div``;
const DropdownList = styled.ul``;
const ListItem = styled.li``;
const BetEntry = styled.div``;
const ItemBox = styled.div``;
const Item = styled.button``;
const Spread = styled.div``;
const CommitBet = styled.button``;
const Reset = styled.button``;
const Placeholder = styled.div``;
