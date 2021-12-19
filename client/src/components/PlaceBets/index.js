import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PlaceBets = () => {
  const [availableBets, setAvailableBets] = useState(null);
  const [activeBet, setActiveBet] = useState(null);
  const [selectedBet, setSelectedBet] = useState(null);
  // 1. fetch available NBA games to gamble on based off of Date

  // 2. establish date range

  const selectBet = () => {
    //   set bet selection
  };

  const getBet = (bet) => {
    // betId = bet;
    // fetch specific bet details
  };

  const lockBet = () => {
    //   post fetch to user specific data stream
  };

  const resetBet = () => {
    // resets betting card to select game
  };

  return (
    <div>
      <BetContainer>
        <DropdownList>
          {/* Maybe see if you can use a mini calendar map to select */}
        </DropdownList>
        <DropdownList>
          {availableBets ? (
            (availableBets.map = (bet) => {
              return <ListItem onClick={getBet(bet)}>{bet}</ListItem>;
            })
          ) : (
            <ListItem> Please select a date</ListItem>
          )}
        </DropdownList>
        <BetEntry>
          {activeBet ? (
            <div>
              <ItemBox>
                <Item onClick={selectBet()}>{activeBet.team1}</Item>
                <Spread>{activeBet.team1Spread}</Spread>
              </ItemBox>
              <ItemBox>
                <Item onClick={selectBet()}>{activeBet.team2}</Item>
                <Spread>{activeBet.team2Spread}</Spread>
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
