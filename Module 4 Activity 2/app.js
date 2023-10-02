// Rajesh Kumar
// 1224671266
// IFT 544 

const express = require('express');
const morgan = require('morgan');
const app = express();

const customerRouter = require('./routes/customerRoutes');
const loanLedgerRouter = require('./routes/loanLedgerRoutes');

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});

// 3) ROUTES
app.use('/api/v1/loans', loansRouter);

module.exports = app;
