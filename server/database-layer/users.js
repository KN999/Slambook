// Importing required files and there reference
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bcrypt = require('bcrypt');
require('dotenv').config()

// Database's URI is fetched from environment variable
const uri = "mongodb+srv://skaduz:khooni_kabootar@slambook-1v2ta.mongodb.net/test?retryWrites=true&w=majority";

// Login User
exports.ValidateUser = (user, callback) => {

    // Connection with database is made
    MongoClient.connect(uri, (err, client) => {

        // assert if error occured during connecting with database
        assert.equal(null, err);

        // creating reference to the DB slambooks
        const db = client.db('slambooks');
        let result = {};

        // finding the user with user.username(varaible) in the collection "users"
        db.collection('users').find({ username: user.username }).forEach( async(dbuser) => {

           // Decrypt and check the password
           await bcrypt.compare(user.password, dbuser.password, (err, res)=>{

               // If some error occured return error
                if(err) {
                    console.log("some error occc=ured!",error);
                    callback("ERROR : ",error);
                }

                // if the password match return successful message with callback
                if(res) {
                    console.log("In the if clause")
                    result.code = 102; // 102 - Credential Matched
                    result.message = 'Success';
                    result.token = user.username;
                    callback(result);
                }

                // if the password doesn't match return Failure with callback
                else {
                    console.log("In the else clause")
                    result.code = 101; //101 - Invalid Password or Username
                    result.message = 'Failure: Password or Username is incorrect';
                    result.error = err;
                    callback(result);
                }
            });
        });

    });
}

// Check for the availibility of username
exports.CheckUsername = (user, callback) => {
    
    // Connection with database is made
    MongoClient.connect(uri, async(err, client) => {
        
        // assert if error occured during connecting with database
        assert.equal(null, err);

        // creating reference to the DB slambooks
        const db = client.db('slambooks');
        let result = {};

        // finding the user with user.username(varaible) in the collection "users"
        db.collection('users').find({ username: user.username }).toArray()
        .then((users) => {
            // user doesn't exist register user
            if(users.length === 0)
                this.RegisterUser(user, callback);
            // user exist send error message
            else {
                result.code = 300; // 300 - Invalid Username/ username already taken
                result.message = 'Failure: Username already exists';
                callback(result);
            }
            
            // print successful message for the console
            console.log("Registration Done.")
        })

        // if any error occured
        .catch((error) => {
            console.log("ERROR : ", error);
        })
    });
}

// Register the user
exports.RegisterUser = (user, callback) => {

    // Define a Token for the client
    let token = user.username;

    // Connection with database is made
    MongoClient.connect(uri, (err, client) => {
        
        // assert if error occured during connecting with database
        assert.equal(null, err);

        // creating reference to the DB slambooks
        const db = client.db('slambooks');
        let result = {};
    
        // Add user to the collection "users"
        db.collection('users').insertOne(user, (err, res) => {

            // If some error occured return error
            if(err) {
                console.log("some error occc=ured!",error);
                callback("ERROR : ",error);
            }

            // If some user is added successfully to the collection then return the successful response
            result.code = 303;// 303 - user registered successfully
            result.message = 'Success';
            result.token = token;
            console.log("item inserted");
            callback(result);
            
            // close the connection with database
            client.close();
        });

    });
}

