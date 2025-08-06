require('dotenv').config();
const express = require('express');
const mainRouter = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Main API route
app.use('/api', mainRouter);

// A simple health-check endpoint to show the server is running
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});