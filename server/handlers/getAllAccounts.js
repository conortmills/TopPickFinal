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

const getAllAccounts = async (req, res) => {
  try {
    const offset = req.params.offset ? req.params.offset : 0;
    const quantity = 10;

    // create a new client
    const client = new MongoClient(MONGO_URI, options);

    // connect to the client
    await client.connect();

    // connect to the database
    const db = client.db("TopPicker");
    console.log("CONNECTED");

    // retreive all items
    const allAccounts = await db
      .collection("pickeraccounts")
      .find()
      .skip(parseInt(offset))
      .limit(quantity)
      .toArray();

    //close the collection
    client.close();
    console.log("DISCONNECTED");

    // return the json object and status
    return (
      // SUCCESS return
      res.status(200).json({
        status: 200,
        data: allAccounts,
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
module.exports = { getAllAccounts };
