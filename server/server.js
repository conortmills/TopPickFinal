"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// handlers

const { deleteFollowed } = require("./handlers/deleteFollowed.js");
const { getAllAccounts } = require("./handlers/getAllAccounts.js");
const { getAllFollowedBy } = require("./handlers/getAllFollowedBy.js");
const { getAllMyBets } = require("./handlers/getAllMyBets.js");
const { getAllNBABets } = require("./handlers/getAllNBABets.js");
const { getAllUserBets } = require("./handlers/getAllUserBets");
const { getBetByID } = require("./handlers/getBetByID");
const { postNewAccount } = require("./handlers/postNewAccount");
const { postNewBet } = require("./handlers/postNewBet");
const { updateProfileInfo } = require("./handlers/updateProfileInfo");
const { updateUsersFollowed } = require("./handlers/updateUsersFollowed");

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

  //REST ENDPOINTS

  .delete("/toppicker/unfollow/:_id", deleteFollowed)
  .get("/toppicker/accounts", getAllAccounts)
  .get("/toppicker/accounts/followedby/:_id", getAllFollowedBy)
  .get("/toppicker/myprofile/:_id", getAllMyBets)
  .get("/toppicker/makebet/allNBAbets/:date", getAllNBABets)
  .get("/toppicker/profile/:_id", getAllUserBets)
  .get("/toppicker/bets/:_id", getBetByID)
  .post("/toppicker/createaccount", postNewAccount)
  .post("/toppicker/createbet", postNewBet)
  .update("/toppicker/updateprofile", updateProfileInfo)
  .update("/toppicker/usersfollowed", updateUsersFollowed)

  // catch all endpoint
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This page does not exist.",
    });
  })

  // our port
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
