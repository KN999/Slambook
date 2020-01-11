var express = require('express');
var router = express.Router();
const crypto = require("crypto");

var DatabaseClient = require('../database-layer/actions');

// Search the user
router.get('/search', function(req, res) {
    var username = req.query.username;
    DatabaseClient.FindUser(username, (result) => {
        res.send(result);
    })
})

// Dashboard of user
router.get('/slampages', function(req, res) {
    DatabaseClient.Slampages(req.query.username, (result) => {
        res.send(result);
    })
})

// Add Slampages
router.post('/addpage', function (req, res) {

    var slampage = {
        username: req.body.username,
        writer: req.body.writer,
        Q1: req.body.Q1,
        Q2: req.body.Q2,
        Q3: req.body.Q3,
        Q4: req.body.Q4,
        Q5: req.body.Q5,
        Q6: req.body.Q6,
    };

    DatabaseClient.AddPage(slampage, (result) => {
        res.send(result);
    });
});

module.exports = router;