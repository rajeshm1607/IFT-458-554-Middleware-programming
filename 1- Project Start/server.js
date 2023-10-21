
// Required for Node to read .env file
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/config.env' });


// required for communicating and connecting to the database
// and perform CRUD operations
const mongoose = require('mongoose');

// required for the application to run
const app = require('./app');

// Connect to the database and replace the mongodb_user, database name and password
// mongodb_user is your own credentials that you created to access the mongodb atlas database
let connectionString = process.env.DATABASE.replace(
  '<mongodb_user>',
  process.env.MONGODB_USER
);

// and the password that you created to access the mongodb atlas database
connectionString = connectionString.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// and the database name that you created to access the mongodb atlas database
connectionString = connectionString.replace(
  '<database>',
  process.env.DATABASE_NAME
);

const mongodbConnectionString = connectionString;
// Connect to the database
console.log(connectionString); // check the database connection string
mongoose
  .connect(mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useCreateIndex: true,
    //useFindAndModify: false
  })
  .then(() => {
    console.log('DB connection successful!')
  })
  .catch(err => {
    console.log('DB connection failed!');
    console.log(err); 
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

