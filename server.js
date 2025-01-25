require("dotenv").config();
const express = require("express");
const http = require("http");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const { Server } = require("socket.io");
const chatRoutes = require("./routes/chat");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

// Socket.IO setup
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  socket.on("sendMessage", (message) => {
    io.to(message.room).emit("receiveMessage", message);
  });

  socket.on("disconnect", () => console.log("Socket disconnected"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
