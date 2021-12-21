const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const followUser = async (req, res) => {
  try {
    const _id = req.params._id;
    console.log(_id);
    const { user } = req.body;
    console.log(req.body.user);

    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    // connect to the database
    const db = client.db("TopPicker");

    console.log("CONNECTED");

    await db
      .collection("consumeraccounts")
      .updateOne({ _id: user }, { $push: { following: _id } });

    client.close();
    console.log("DISCONNECTED");

    return res.status(200).json({
      status: 200,
      message: _id,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
};

module.exports = { followUser };
