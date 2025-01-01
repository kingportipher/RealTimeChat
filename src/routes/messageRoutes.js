const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');
const authenticate = require('../middleware/authenticate');

// Route to send a message
router.post('/', authenticate, sendMessage);

// Route to fetch messages between two users
router.get('/:userId', authenticate, getMessages);

module.exports = router;
