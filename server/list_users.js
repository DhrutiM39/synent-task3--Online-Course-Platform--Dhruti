const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/user");

async function listUsers() {
  await mongoose.connect(process.env.MONGO_URI, { dbName: "test" });
  const users = await User.find({});
  console.log("USERS:", JSON.stringify(users, null, 2));
  process.exit(0);
}
listUsers();
