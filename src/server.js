const server = require('./app');

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');

// Middleware for JSON parsing
app.use(express.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

module.exports = app;


server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
