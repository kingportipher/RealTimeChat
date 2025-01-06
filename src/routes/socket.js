const socketHandler = (io) => {
  io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('message', (data) => {
          io.emit('message', data); // Broadcast to all clients
      });

      socket.on('disconnect', () => {
          console.log('A user disconnected');
      });
  });
};

module.exports = { socketHandler };
