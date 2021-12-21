"use strict";

const api_key = process.env.api_key;

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// handlers

const { followUser } = require("./handlers/followUser.js");
const { getAllAccounts } = require("./handlers/getAllAccounts.js");
const { getAllFollowedBy } = require("./handlers/getAllFollowedBy.js");
const { getAllMyBets } = require("./handlers/getAllMyBets.js");
const { getAllNBABets } = require("./handlers/getAllNBABets.js");
const { getAllUserBets } = require("./handlers/getAllUserBets");
const { getBetByID } = require("./handlers/getBetByID");
const { postNewPickerAccount } = require("./handlers/postNewPickerAccount");
const { postNewConsumerAccount } = require("./handlers/postNewConsumerAccount");
const { postNewBet } = require("./handlers/postNewBet");
const { updateProfileInfo } = require("./handlers/updateProfileInfo");
const { unfollowUser } = require("./handlers/unfollowUser");
const { getProfile } = require("./handlers/getProfile");
const { getAllBets } = require("./handlers/getAllBets");

//port
const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //REST ENDPOINTS/
  .get(
    "https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=14c8736c45b7057cd5906611f2efe583&regions=us&markets=h2h,spreads&oddsFormat=american",
    getAllNBABets
  )
  .get("/toppicker/bets", getAllBets)
  .get("/toppicker/profile/get/:_id", getProfile)
  .get("/toppicker/accounts", getAllAccounts)
  .get("/toppicker/accounts/following/:_id", getAllFollowedBy)
  .get("/toppicker/myprofile/:_id", getAllMyBets)
  .get("/toppicker/makebet/allNBAbets/:date", getAllNBABets)
  .get("/toppicker/profile/:_id", getAllUserBets)
  .get("/toppicker/bets/:_id", getBetByID)
  .post("/toppicker/createPickerAaccount", postNewPickerAccount)
  .post("/toppicker/createConsumerAccount", postNewConsumerAccount)
  .post("/toppicker/createbet", postNewBet)
  .put("/toppicker/updateprofile", updateProfileInfo)
  .put("/toppicker/follow/:_id", followUser)
  .put("/toppicker/unfollow/:_id", unfollowUser)

  // catch all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This page does not exist.",
    });
  })

  // our port
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
