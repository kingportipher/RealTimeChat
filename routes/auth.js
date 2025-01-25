const express = require("express");
const User = require("../models/User");
const generateToken = require("../config/jwt");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).send({ message: "User already exists" });

    const user = await User.create({ username, password });
    const token = generateToken(user._id);
    res.status(201).send({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).send({ message: "Error registering user", error });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).send({ message: "Invalid username or password" });
    }

    const token = generateToken(user._id);
    res.send({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send({ message: "Error logging in", error });
  }
});

module.exports = router;
