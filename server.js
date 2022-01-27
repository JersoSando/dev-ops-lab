const express = require('express');
const app = express()
const path = require ('path')

app.use(express.jason())
app.use(cors())


// app.use("/styles", express.static(path.join(__dirname, "./styles.css")));

app.use("/js", express.static(path.join(__dirname, "./server.js")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
});

// app.get("/styles", function(req, res) {
//     res.sendFile(path.join(__dirname, "./styles.css"));
// });


// process.env.PORT is HEROKU'S responsibility. They will provide the PORT number on deployment.
// The second port number is for local development purposes only.
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});