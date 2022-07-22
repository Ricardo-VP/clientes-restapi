const moongose = require("mongoose");

const url = "mongodb://localhost:27017/clientes";

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
