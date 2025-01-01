const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('sendMessage', (message) => {
      const { sender, receiver, content } = message;
      io.to(receiver).emit('receiveMessage', { sender, content });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};

module.exports = socketHandler;
