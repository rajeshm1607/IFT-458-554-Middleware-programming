// controllers/UserController.js
const { User } = require('../models/User');
const users = []; // In-memory user storage, replace with a database in a real app

function registerUser(username, email, password) {
    // Validate input data and check uniqueness
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        return { success: false, message: 'Username or email already exists' };
    }

    // Create a new User instance and add it to the users array
    const newUser = new User(username, email, password);
    users.push(newUser);

    return { success: true, message: 'Registration successful' };
}

function loginUser(username, password) {
    // Find the user by username
    const user = users.find(u => u.username === username);

    if (!user || user.password !== password) {
        return { success: false, message: 'Invalid username or password' };
    }

    return { success: true, message: 'Login successful' };
}

module.exports = {
    registerUser,
    loginUser,
};
