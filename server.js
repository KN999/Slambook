// Importing required files and there reference
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const path = require('path');
const PORT = process.env.PORT || 8080; // Step 1
const userRoute =  require('./server/service-layer/users.js')
const actionsRoute = require('./server/service-layer/actions.js')

// Support JSON-encoded bodies
app.use( bodyParser.json() );       

// Support URL-encoded bodies
app.use(bodyParser.urlencoded({    
  extended: true
})); 
router.use(bodyParser.json())

app.use('/user', userRoute);
app.use('/actions', actionsRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

// Makes the app is listening at 8080 or the PORT
app.listen(PORT, () => {
    console.log(`Server is starting at PORT: ${PORT}`);
});