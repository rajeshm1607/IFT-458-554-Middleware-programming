const express = require('express');
const bodyParser= require('body-parser');


const app = express();

app.use(bodyParser.json());



// Global middleware for logging requests
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Date-Time: ${new Date().toLocaleString()}`);
  next();
});

// Define your routes and other middleware here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Simulated user data (replace with actual user authentication logic)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];
  
app.get('/',(req,res)=>{
    res.send('Welcome to Bookhub!');
})

  // Route middleware for user authentication
  function authenticateUser(req, res, next) {
    const { username, password } = req.body;
  
    // Check if the provided username and password match any user in the database
    const authenticatedUser = users.find(
      (user) => user.username === username && user.password === password
    );
  
    if (authenticatedUser) {
      // User is authenticated, continue to the next middleware
      next();
    } else {
      // User authentication failed
      res.status(401).json({ message: 'Authentication failed' });
    }
  }
  
  // Add a book to the user's cart route
  app.post('/cart/add', authenticateUser, (req, res) => {
    // Handle adding a book to the cart
    res.json({ message: 'Book added to cart' });
  });
  
  // Remove a book from the user's cart route
  app.post('/cart/remove', authenticateUser, (req, res) => {
    // Handle removing a book from the cart
    res.json({ message: 'Book removed from cart' });
  });
  