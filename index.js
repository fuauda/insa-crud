const express = require('express');
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoute');
const blogRoute = require('./routes/blogRoute');
const userRoute = require('./routes/userRoute');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/blogs', blogRoute);
app.use('/api/users', userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));