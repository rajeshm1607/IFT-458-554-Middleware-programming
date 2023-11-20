const express = require('express');
const app = express();
const port = 3000;

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
    next();
});

// Routes for different HTTP status codes
app.get('/200', (req, res) => {
    res.status(200).send('OK: The request has succeeded');
});

app.get('/201', (req, res) => {
    res.status(201).send('Created: The request has been fulfilled and resulted in a new resource being created');
});

app.get('/400', (req, res) => {
    res.status(400).send('Bad Request: The server could not understand the request due to invalid syntax');
});

app.get('/404', (req, res) => {
    res.status(404).send('Not Found: The server can not find the requested resource');
});

app.get('/500', (req, res) => {
    res.status(500).send('Internal Server Error: The server has encountered a situation it doesn\'t know how to handle');
});

// Route for simulating an asynchronous action with Promise try/catch
app.get('/async-action', async (req, res, next) => {
    try {
        // Simulate an asynchronous action with a delay using setTimeout
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate a successful completion
                // If you want to simulate an error, you can reject the Promise
                resolve('Asynchronous action completed successfully');
            }, 1000);
        });

        res.status(200).send(result);
    } catch (err) {
        // If the Promise is rejected, return the error message with a 500 status code
        next(err);
    }
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
    res.status(404).send('Not Found: The requested resource could not be found');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error: Something went wrong on the server');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
