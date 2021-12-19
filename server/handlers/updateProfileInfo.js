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


const updateProfileInfo = async (req, res) => {
  try {
    // get the id number from params
    const { _id, accountDetails } = req.body;

    // create a new client  
    const client = new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("Toppicker");
    console.log("CONNECTED");

    // retreive all items
    // parseId() required for the function to recognize the variable
    // _id from params as a number. If it's not there the function returns null
    const singleAccount = await db
      .collection("accounts")
      .findOne({ _id: parseInt(_id) });


    const updateMessage = await db
      .collection("accounts")
      .updateOne(
        { _id: parseInt(_id) },
        { $set: { account: accountDetails } }
      );

    //close the collection
    client.close();
    console.log("DISCONNECTED");

    // return the json object and status
    return (
      // SUCCESS return
      res.status(200).json({
        status: 200,
        // data: currentStock,
        message: updateMessage,
      })
    );
  } catch (err) {
    // ERROR return
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

// export handler function
module.exports = { updateProfileInfo };

