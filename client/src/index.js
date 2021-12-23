import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { TopPickerProvider } from "./components/TopPickerContext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1u8i63t8.us.auth0.com"
      clientId="NyfpflDmb0M7md7lH6QgSDmsTgiPz9OB"
      redirectUri="http://localhost:3000/account-choice"
    >
      <TopPickerProvider>
        <App />
      </TopPickerProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
