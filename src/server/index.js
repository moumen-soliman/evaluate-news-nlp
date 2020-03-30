var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
var aylien = require("aylien_textapi");

const app = express()
dotenv.config();

app.use(express.static('dist'))

// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
