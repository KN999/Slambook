// Importing required files and there reference
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config()

// Database's URI is fetched from environment variable
const uri = process.env.DB_URI;

// Find user
exports.FindUser = (user, callback) => {

    // Connection with the Database is made
    MongoClient.connect(uri, (err, client) => {

        // assert if some error occured during making connection with the database
        assert.equal(null, err);

        // creating a reference variable to the db slambook
        let db = client.db('slambooks');

        // indexing the users collection 
        db.collection('users').createIndex( { username: "text"} )

        // running the find query to the users collection
        db.collection('users').find( { $text: { $search: user } } ).toArray()
        .then((result) => {
            // if not found then return failer message
            if(result.length === 0) {
                callback({
                    code : 705,
                    message : "No user found"
                });
            }
            // if found then return success message
            else {
                callback({
                    code : 405,
                    message : "Data found",
                    data : user
                })
            }
        })

        // if some error occured during the db query
        .catch((error) => {
            console.log(" ERROR : ",error);
        })
        
        // closing the connection from the database
        client.close();
    });
}

// Adds the slamPage
exports.AddPage = (slampagedetails, callback) => {

    // Connection with the Database is made
    MongoClient.connect(uri, async (err, client) => {

        // assert if some error occured during making connection with the database
        assert.equal(null, err);

        // defining the slampage variable to be inserted
        let slampage = {
            writer: slampagedetails.writer,
            Q1: slampagedetails.Q1,
            Q2: slampagedetails.Q2,
            Q3: slampagedetails.Q3,
            Q4: slampagedetails.Q4,
            Q5: slampagedetails.Q5,
            Q6: slampagedetails.Q6,
        };

    // creating a reference variable to the db slambook
    const db = client.db('slambooks');

    // finding the user whom's slambook's page is needed to be added
    await db.collection('users').find({ username : slampagedetails.username}).toArray()
    .then((users) => {

        // if user doesnot exist then return failure
        if(users.length === 0)
            callback({code : 403, message: "Failure no user exist."});
        
            // if user does exist then insert the page and send success message
        else {
            db.collection('users').update(
                { username: slampagedetails.username },
                { $addToSet: { slampages: slampage } },
                (error, result) => {
                    if (error)
                        callback({code: 404, message: "Failure", error: error});
                    else
                        callback({code: 403, message: "Success"});
            })
        }
    })
    // if some error occured during the db query
    .catch((error) => {
        console.log(" ERROR : ",error);
    })

    // closing the connection from the database
    client.close();
    })
}

// Get the slampages of the user
exports.Slampages = (username, callback) => {

    // Connection with the Database is made
    MongoClient.connect(uri, (err, client) => {
        
        // assert if some error occured during making connection with the database
        assert.equal(null, err);

        // creating a reference variable to the db slambook
        let db = client.db('slambooks');
        let result = {
            code : 405, 
            message : "No slampages",
        };
        
        // find the user with the username
        db.collection('users').find({ username: username }).forEach((slampages) => {
            if (slampages) {
                result.code = 404; // Success in retrieving data
                result.message = "Data found";
                result.slambook = slampages.slampages;
            }
        },() => {
                callback(result);
        })

        // closing the connection from the database
        client.close();
    });
}