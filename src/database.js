const moongose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URI || "mongodb://localhost:27017/clientes";

moongose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });
