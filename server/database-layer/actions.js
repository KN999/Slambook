const MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

const uri = "mongodb+srv://navin:qwerty@123@slambook-1v2ta.mongodb.net/test?retryWrites=true&w=majority";

exports.FindUser = (user, callback) => {

    MongoClient.connect(uri, function (err, client) {
        assert.equal(null, err);
        var db = client.db('slambooks');
        var result = {
            code : 705,
            message : "No user found",
        };

        var users = [];
 
        db.collection('users').find({ username : user }).forEach(function (dbuser) {
            if (dbuser) {
                result.code = 405;
                result.message = "Data found";
                users.push({
                    name: dbuser.name,
                    username: dbuser.username,
                });
                result.user = users;
            }
        },() => {
                callback(result);
        })
        client.close();
    });
}

exports.AddPage = (slampagedetails, callback) => {

    MongoClient.connect(uri, function (err, client) {
        assert.equal(null, err);

        var slampage = {
            writer: slampagedetails.writer,
            Q1: slampagedetails.Q1,
            Q2: slampagedetails.Q2,
            Q3: slampagedetails.Q3,
            Q4: slampagedetails.Q4,
            Q5: slampagedetails.Q5,
            Q6: slampagedetails.Q6,
        };

    var db = client.db('slambooks');
    var results = {};

    db.collection('users').update(
        { username: slampagedetails.username },
        { $addToSet: { slampages: slampage } },
        function (err, result) {
            if (err) {
                results.code = '404';
                results.message = 'Failure';
                callback(results);
                throw err;
            }
            else {
                results.code = 403;
                results.message = 'Success';
                callback(results);
                console.log(results);
            }
    })
    
    client.close();

    })
}

exports.Slampages = (username, callback) => {
    MongoClient.connect(uri, function (err, client) {

        assert.equal(null, err);
        var db = client.db('slambooks');
        var result = {
            code : 405, 
            message : "No slampages",
        };

        db.collection('users').find({ username: username }).forEach(function (slampages) {
            if (slampages) {
                result.code = 404; // Success in retrieving data
                result.message = "Data found";
                result.slambook = slampages;
            }
        },() => {
                callback(result);
        })
    });
}