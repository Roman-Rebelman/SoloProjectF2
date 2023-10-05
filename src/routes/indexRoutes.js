const express = require("express");

const renderTemplate = require("../lib/renderTemplate");
const Home = require("../views/Home");
const { Dogs } = require("../../db/models");

const router = express.Router();

const { checkUser } = require("../middlewares/common.js");

router.get("/", checkUser, (req, res) => {
  const { login } = req.session;
  renderTemplate(Home, { login }, res);
});

router.get("/logout", checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("DogsCookie");
    res.redirect("/");
  });
});

router.post("/breeds/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const newDog = await Dogs.findOne({ where: { breeds: name } });
  res.json({ serch: newDog.description });
});

module.exports = router;
