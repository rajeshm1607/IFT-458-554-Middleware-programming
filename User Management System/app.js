const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRoutes); // Mount user routes under '/user'

app.get('/', (req, res) => {
    res.redirect('/user/login'); // Redirect to login page by default
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
