const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const assert = require("assert");

const { v4: uuidv4 } = require("uuid");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const postNewConsumerAccount = async (req, res) => {
  const _id = uuidv4();
  console.log(req.body);
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("TopPicker");

    const account = await db
      .collection("consumeraccounts")
      .insertOne({ _id, ...req.body });

    res.status(201).json({ status: 201, data: req.body, id: _id });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

module.exports = { postNewConsumerAccount };
