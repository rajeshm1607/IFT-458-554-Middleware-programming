// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Render the registration form
router.get('/register', (req, res) => {
    res.render('registration');
});

// Handle registration form submission
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const result = UserController.registerUser(username, email, password);
    if (result.success) {
        res.redirect('/user/login');
    } else {
        res.render('user/registration', { error: result.message });
    }
});

// Render the login form
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login form submission
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const result = UserController.loginUser(username, password);
    if (result.success) {
        res.redirect('/dashboard'); // Redirect to a dashboard page upon successful login
    } else {
        res.render('login', { error: result.message });
    }
});

module.exports = router;
