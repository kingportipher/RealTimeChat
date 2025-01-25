const express = require("express");
const Chat = require("../models/Chat");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();

// POST a message
router.post("/send", verifyToken, async (req, res) => {
  const { message, recipient } = req.body;

  if (!message || !recipient) {
    return res.status(400).send({ message: "Message and recipient are required" });
  }

  try {
    const chatMessage = await Chat.create({
      sender: req.user.id,
      recipient,
      message,
    });
    res.status(201).send({ message: "Message sent", chatMessage });
  } catch (error) {
    res.status(500).send({ message: "Error sending message", error });
  }
});

// GET chat history with a specific user
router.get("/history/:recipientId", verifyToken, async (req, res) => {
  const { recipientId } = req.params;

  try {
    const chatHistory = await Chat.find({
      $or: [
        { sender: req.user.id, recipient: recipientId },
        { sender: recipientId, recipient: req.user.id },
      ],
    }).sort({ createdAt: 1 }); // Sort by date (oldest first)

    res.send({ message: "Chat history retrieved", chatHistory });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving chat history", error });
  }
});

module.exports = router;
