var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
const path = require('path');

const PORT = process.env.PORT || 8080; // Step 1

var userRoute =  require('./server/service-layer/users.js')
var actionsRoute = require('./server/service-layer/actions.js')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
router.use(bodyParser.json())

app.use('/users', userRoute);
app.use('/actions', actionsRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}
else {
    app.get('/', (req, res) => {
        res.send("Ping pong");
    });
}

app.listen(PORT, () => {
    console.log(`Server is starting at PORT: ${PORT}`);
});