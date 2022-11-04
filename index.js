const container = require("./src/startup/container");
const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://tamueka:tamueka83@cluster0.926df.mongodb.net/shareyouridea?retryWrites=true&w=majority"
  )
  .then(() => server.start())
  .catch((err) => console.log("Error", err));
