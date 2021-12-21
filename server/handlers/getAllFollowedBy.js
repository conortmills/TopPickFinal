"use strict";

//require Mongodb
const { MongoClient } = require("mongodb");

//get URI
require("dotenv").config({ path: "./.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// get all items from the database
const getAllFollowedBy = async (req, res) => {
  console.log(req.params._id);
  // get company id number from the request parameters
  const accountID = req.params._id;

  console.log(accountID);

  //get offset and quantity for pagination from the request body
  // conditional to account for no body - start from beginning and give 6 items

  // create a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database
  const db = client.db("TopPicker");
  console.log("CONNECTED");

  // retreive all items
  const userBets = await db
    .collection("consumeraccounts")
    .find({ _id: accountID })
    .toArray();

  if (!userBets) {
    res.status(404).json({ status: 404 });
  } else {
    res.status(200).json({ status: 200, data: userBets });
  }
  client.close();
  console.log("DISCONNECTED");
};
// export handler function
module.exports = { getAllFollowedBy };
