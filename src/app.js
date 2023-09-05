const express = require("express");
const {connect} = require("mongoose");
const routes = require("./routes");
const config = require("../config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", routes);

const bootstrap = async () => {
  await connect(config.dbUri);

  console.log("Connect to DB...");

  app.listen(config.port, () => {
    console.log(config.port);
  });
};

bootstrap();
