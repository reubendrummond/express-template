const router = require("express").Router();
const axios = require("axios");
const { NotFoundError } = require("@errorTypes");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ data: "woohoo" });
  } catch (err) {
    next(err);
  }
});

router.get("/error", (req, res) => {
  throw NotFoundError("Oh no! This is a test error.");
});

module.exports = router;
