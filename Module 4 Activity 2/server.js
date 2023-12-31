//Rajesh Kumar
//IFT 544
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const app = express();
const morgan = require('morgan');    //Use morgan for logging purposes

if (process.env.NODE_ENV === 'development') {
    //app.use(morgan('combined :method :url :status :res[content-length] - :response-time ms'))
    app.use(morgan('combined'))
}

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//const app = require('./app');
//new code

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//routes
const loanRoute = require('./routes/loanRoutes');
app.use('/loans', loanRoute);

const customerRouter = require('./routes/customerRoutes');
app.use('/customers', customerRouter);

const loanLedgerRouter = require('./routes/loanLedgerRoutes');
app.use('/loanledger', loanLedgerRouter);

//connecting to the database
const mongoose = require('mongoose');
//asynchronous DB connection with parameterized DB connection string
mongoose.connect(`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_DBSERVER}/${process.env.DATABASE}`
,{useNewUrlParser: true})
    .then(() => console.log(`MongoDB connection succeeded with ${process.env.DATABASE}...`))
    .catch((err) => console.log('Error in DB connection: ' + err));

console.log(`The DB connection string is: 
mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_DBSERVER}/${process.env.DATABASE}`);

