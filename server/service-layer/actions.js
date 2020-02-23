// Importing required files and there reference
const express = require('express');
const router = express.Router();
const crypto = require("crypto");
const DatabaseClient = require('../database-layer/actions');

// Search the user
router.get('/search', (req, res) => {
    
    // Extracting the username
    let username = req.query.username;

    // calling the 'FindUser' from the Database layer
    DatabaseClient.FindUser(username, (result) => {
        res.send(result);
    })
})

// Dashboard of user
router.get('/slampages', (req, res) => {

    // calling the 'Slampages' from the Database layer
    DatabaseClient.Slampages(req.query.username, (result) => {
        res.send(result);
    })
})

// Add Slampages
router.post('/addpage', (req, res) => {

    // Extracting the username and writer and answer
    let slampage = {
        username: req.body.username,
        writer: req.body.writer,
        Q1: req.body.Q1,
        Q2: req.body.Q2,
        Q3: req.body.Q3,
        Q4: req.body.Q4,
        Q5: req.body.Q5,
        Q6: req.body.Q6,
    };

    // calling the 'AddPage' from the Database layer
    DatabaseClient.AddPage(slampage, (result) => {
        res.send(result);
    });
});

module.exports = router;