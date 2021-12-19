const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const deleteFollowed = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("Toppicker");

  console.log(req.params.id);

  await db.collection("reservations").deleteOne(req.params);

  res.status(204).json({ status: 204 });

  await client.close();
};

module.exports = { deleteFollowed };
