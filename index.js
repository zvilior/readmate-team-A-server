const express = require("express"),
  app = express(),
  PORT = 3001;

const router = require("./Routers");
app.use(express.json());
app.use(require("cors")());
app.use("/api", router);

app.listen(PORT, () => console.log(`server is running => ${PORT}`));
require("./DL/db").connect();
