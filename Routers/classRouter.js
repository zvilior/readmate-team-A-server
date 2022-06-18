const express = require("express");
const router = express.Router();
const classLogic = require("../BL/classLogic");

router.get("/", async (req, res) => {
  const users = await classLogic.getClass();
  res.send(users);
});
