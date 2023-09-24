// models/User.js
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const users = []; // Store users in memory

module.exports = {
    User,
    users,
};
