// Importing required files and there reference
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const DatabaseClient = require('../database-layer/users');
const saltRounds = 10;
require('dotenv').config()

// Login the user
router.post('/login', async(req, res) => {

    // Extracting the username and password
    let user = {
        username: req.body.username,
        password: req.body.password,
    }
   
    // Calling the 'ValidateUser' from the database layer
    DatabaseClient.ValidateUser(user, (result) => {
        res.send(result);
    });

});

// Register the user
router.post('/register', async(req, res) => {

    // Extracting the user's detail
    let user = {
        name: req.body.name,
        username: req.body.username,
        password: '',
        slampages: []
    };

    // hash the password
    bcrypt.genSalt(10).then(async(salt)=>{
        user.password = await bcrypt.hash(req.body.password, salt);
    })
    .then(()=>{
        // call the 'CheckUsername' and add the user to the collection
        DatabaseClient.CheckUsername(user, (result) => {
            res.send(result);
        });
    })

});

module.exports = router;