const express = require('express');
const cors = require('cors')
const path = require ('path')

const app = express();
app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'faa7402d425046a69dd848a183abc21a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});


// process.env.PORT is HEROKU'S responsibility. They will provide the PORT number on deployment.
// The second port number is for local development purposes only.
app.use(rollbar.errorHandler());

const port = process.env.PORT || 5001;


app.listen(port, () => {
    console.log(`App running on port ${port}`);
});