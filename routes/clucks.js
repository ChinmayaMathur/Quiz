const express = require("express");

const knex = require('../db/queries');

const router = express.Router();


//GET "/clucks"
router.get("/", (req,res) => {
      if (!req.cookies.username) {
            res.render("sign_In_Out", {username: false})
      } else {
            knex
            .index()
            .then(data => {
                  res.render("index", {clucks: data});
            })
      }
})


//GET "/cluck"
router.get("/cluck", (req,res) => {
    res.render("cluck");
})


//GET "/sign"
router.get("/sign", (req,res) => {
      res.render("sign_In_Out");
  })


//POST "/clucks"
router.post("/", (req, res) => {
    req.body.username = req.cookies.username;
    console.log(req.body);
    knex
    .create(req.body) 
    .then(data => { 
          res.redirect("/clucks")
      })
  })


// POST "/cluck"
router.post("/cluck", (req, res) => {
      console.log("chinmaya")
      knex
      .create(req.body) 
      .then(data => { 
            res.redirect("/clucks")
        })
    })


module.exports = router;


