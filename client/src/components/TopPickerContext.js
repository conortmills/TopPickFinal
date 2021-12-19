import React, { useReducer, createContext } from "react";

export const TopPickerContext = createContext(null);

const initialState = {
  hasLoaded: false,
  bets: [],
  accounts: null,
  offset: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "receive-bets-info-from-server":
      var updatedArr = state.items.concat(action.items);
      return {
        ...state,
        hasLoaded: true,
        bets: updatedArr,
        accounts: action.companies,
      };
    case "receive-accounts-info-from-server":
      return {
        ...state,
        hasLoaded: true,
        bets: action.data,
        accounts: action.companies,
      };

    case "change-offset-number":
      return {
        ...state,

        offset: state.offset + 10,
      };

    default:
      throw new Error(`No matching action: ${action.type}`);
  }
};

export const TopPickerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // this function is to fetch item at the beginning and whenever the offset change
  React.useEffect(() => {
    fetch(`/TopPicker/bets/offset/${state.offset}`)
      .then((res) => res.json())
      .then((data) => {
        receiveBetInfoFromServer(data);
      });
  }, [state.offset]);

  // this function is to get all items info for the server when we do fetch
  const receiveBetInfoFromServer = (data) => {
    dispatch({
      type: "receive-bet-info-from-server",
      bets: data.data,
      ...data,
    });
  };

  // this function is to get all companies info for the server when we do fetch
  const receiveAccountInfoFromServer = (data) => {
    dispatch({
      type: "receive-company-info-from-server",
      ...data,
    });
  };
  // this function is to change the offset number when we click on Load more
  const changeOffsetNumber = (data) => {
    dispatch({
      type: "change-offset-number",
      ...data,
    });
  };

  return (
    <TopPickerContext.Provider
      value={{
        state,
        actions: {
          receiveBetInfoFromServer,
          receiveAccountInfoFromServer,
          changeOffsetNumber,
        },
      }}
    >
      {children}
    </TopPickerContext.Provider>
  );
};
