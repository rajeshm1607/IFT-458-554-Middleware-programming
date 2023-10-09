//Rajesh Kumar
//1224671266
//IFT 544
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const express = require('express');
const app = express();

const userRouter = require('./routes/userRoutes');
//const loanRouter = require('./routes/loanRoutes');

app.use(express.json());

//app.use('/api/v1/loans', loanRouter);
app.use('/api/v1/users', userRouter);

// Implement other middleware and error handling as per your original app.js
const port = process.env.PORT || 3000;  // Use the port from environment variables or default to 3000

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
module.exports = app;
