var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({path: './.env'})
//Aylien API
const AylienAPI = require('aylien_textapi');

//set up Aylien API
const textAPI = new AylienAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

//set aylien API credentials

const app = express()

//middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'))
})

app.post('/testing', async(req, res, next) => {
    try {
        var data = textAPI.sentiment({
            'text': req.body.theText
        }, function(error, response) {
          console.log(response, error)
            if (error === null) {
                console.log(response);
                res.send(response);
            }
        });
    } catch(error) {
        return next(error)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})