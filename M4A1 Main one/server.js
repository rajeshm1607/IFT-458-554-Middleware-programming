//Rajesh Kumar
//
//MOUDULE 4 ACTIVITY 1
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

const gradeRoute = require('./routes/gradeRoute');
app.use('/grade', gradeRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//connecting to the database
const mongoose = require('mongoose');

//synchronous connection
// mongoose.connect('mongodb+srv://rkuma110:c99EMFIGPCF0SLwY@cluster0.i8ly3ip.mongodb.net/Activity1Database', { useNewUrlParser: true }, (err) => {
//     if (err) {
//         console.log('MongoDB connection succeeded.')
//     } else {
//         console.log('Error in DB connection: ' + err)
//     }
// });

// //asynchronous connection
mongoose.connect('mongodb+srv://raj:IFT12345@cluster0.als1jzl.mongodb.net/demodb', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.error(err));




