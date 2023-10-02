// app.js

const express = require('express');
const bodyParser = require('body-parser');
const { makeUpperCase } = require('./middlewares');
const studentsRouter = require('./controllers/students');
const app = express();

app.use(bodyParser.json()); // using the middleware body-parser to parse the body of the request
app.use(makeUpperCase); // global middleware

app.use('/students', studentsRouter); // use studentsRouter
app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);
    res.send('Hello');
});

const mongoose = require('mongoose');
const uri = "mongodb+srv://raj:IFT12345@cluster0.als1jzl.mongodb.net/demodb";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('MongoD connection successful');
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});