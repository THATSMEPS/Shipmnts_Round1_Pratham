require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const initialRoute = require('./src/routes/initialroute.js');
const planRoutes = require('./src/routes/plan.route.js');
const storeRoutes = require('./src/routes/store.route.js');
// const orderRoutes = require('./src/routes/order.route.js');

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies

app.use(express.json());

// Main API route
app.use('/api', initialRoute);
app.use('/store', storeRoutes);
app.use('/plan', planRoutes);
// app.use('/order', orderRoute);

// A simple health-check endpoint to show the server is running
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});