const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const authenticate = require('../utils/jwt');
const router = express.Router();

router.post('/', authenticate, sendMessage);
router.get('/:userId', authenticate, getMessages);

module.exports = router;
