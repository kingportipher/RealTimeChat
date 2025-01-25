# Real-Time Chat API Documentation

## Overview
The Real-Time Chat API is a backend solution designed for building scalable and secure messaging platforms. This API leverages Node.js, MongoDB, and Socket.IO to enable real-time communication between users. It provides essential features like user authentication, message storage, and live chat functionality.

---

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Real-Time Messaging**: Instant communication powered by WebSocket technology.
- **Message History**: Persistent storage of chat logs in MongoDB.
- **Scalable Architecture**: Designed to handle concurrent connections efficiently.
- **Secure Data Transmission**: Ensures user data integrity and confidentiality.

---

## Technology Stack
- **Node.js**: Backend runtime for server-side execution.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and message data.
- **Socket.IO**: Library for real-time, bidirectional communication.
- **JWT (JSON Web Tokens)**: Secure token-based authentication.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (latest version)
- npm (Node Package Manager)

### Step 1: Clone the Repository
```bash
git clone https://github.com/kingportipher/RealTimeChat.git
cd RealTimeChat.git
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory with the following content:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/chat-api
JWT_SECRET=your_jwt_secret
```

### Step 4: Start the Server
```bash
npm start
```
Server will be running on `http://localhost:5000`.

---

## File Structure
```
real-time-chat-api/
project/
├── models/
│   ├── User.js
│   ├── Message.js
├── routes/
│   ├── auth.js
│   ├── chat.js
├── server.js
├── config/
│   ├── db.js
│   ├── jwt.js
├── middlewares/
│   ├── authMiddleware.js

```

---

## API Endpoints

### Authentication
#### POST /api/auth/register
**Description**: Register a new user.  
**Request Body**:
```json
{
  "username": "string",
  "password": "string"
}
```
**Response**:
```json
{
  "message": "User registered successfully"
}
```

#### POST /api/auth/login
**Description**: Authenticate user and return a JWT.  
**Request Body**:
```json
{
  "username": "string",
  "password": "string"
}
```
**Response**:
```json
{
  "token": "your_jwt_token"
}
```

### Messages
#### POST /api/messages/send
**Description**: Send a message to another user.  
**Request Body**:
```json
{
  "receiverId": "string",
  "content": "string"
}
```
**Response**:
```json
{
  "message": "Message sent successfully"
}
```

#### GET /api/messages/history/:userId
**Description**: Fetch chat history with a specific user.  
**Response**:
```json
[
  {
    "sender": "string",
    "receiver": "string",
    "content": "string",
    "timestamp": "date"
  }
]
```

---

## Real-Time Communication
### Events
#### `connection`
**Description**: Triggered when a client connects to the WebSocket server.

#### `message`
**Description**: Handles incoming messages and broadcasts them to the recipient.

#### `disconnect`
**Description**: Triggered when a client disconnects from the server.

---

## Future Enhancements
- **Group Chat Support**: Enable group messaging.
- **Media Sharing**: Allow users to share images and files.
- **Read Receipts**: Notify users when messages are read.
- **End-to-End Encryption**: Enhance message security.

---

## Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Socket.IO Documentation](https://socket.io/docs/v4/)
- [Express.js Documentation](https://expressjs.com/)

---

## License
This is a final project for ALX Software Engineering.

---

## Contact
For questions or support, reach out to kingportipher@outlook.com or visit the [GitHub Repository](https://github.com/kingportipher/RealTimeChat.git).

