const container = require("./src/startup/container");
const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");

const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI)
  .then(() => server.start())
  .catch((err) => console.log("Error", err));
