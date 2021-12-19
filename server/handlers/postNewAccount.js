const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const assert = require("assert");

const { v4: uuidv4 } = require("uuid");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const postNewAccount = async (req, res) => {
  const _id = uuidv4();
  console.log(req.body);
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Toppicker");

    const account = await db
      .collection("accounts")
      .insertOne({ _id, ...req.body });

 
    res.status(201).json({ status: 201, data: req.body, id: _id });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

module.exports = { postNewAccount };
