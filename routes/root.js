const express = require("express");

const knex = require('../db/client');

const router = express.Router();

router.get("/", (req, res) => {
      if (!req.cookies.username) {
            res.render("sign_In_Out", {username: false})
      } else {
            knex("clucks")
            .orderBy("createdAt", "DESC")
            .then(data => {
                  res.render("index", {clucks: data, username: req.cookies.username})
            })
      }
})

const COOKIE_MAX_AGE = 100*60*60*24*30;
router.post("/sign_in", (req,res) => {
    res.cookie("username", req.body.username, {maxAge: COOKIE_MAX_AGE});
    res.redirect("/clucks");
})

router.post("/sign_out", (req, res) => {
      res.clearCookie("username")
      res.redirect("/clucks");
  })

module.exports = router;