const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://nelsoncarvalho:12345@cluster0-munpt.mongodb.net/test?retryWrites=true&w=majority";

const openConnection = () =>
  mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = {
  openConnection
};
