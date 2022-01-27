const express = require('express');
const cors = require('cors')
const path = require ('path')

const app = express();
// app.use(express.jason())
app.use(cors());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8f09df17f607463d9fe058bfb182aec3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

// app.use("/styles", express.static(path.join(__dirname, "./styles.css")));

// app.use("/js", express.static(path.join(__dirname, "./server.js")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

// app.get("/styles", function(req, res) {
//     res.sendFile(path.join(__dirname, "./styles.css"));
// });


// process.env.PORT is HEROKU'S responsibility. They will provide the PORT number on deployment.
// The second port number is for local development purposes only.
app.use(rollbar.errorHandler());

const port = process.env.PORT || 5001;


app.listen(port, () => {
    console.log(`App running on port ${port}`);
});