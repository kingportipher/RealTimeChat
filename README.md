## Features

- **Real-Time Messaging:** Powered by Socket.IO for instant message delivery.
- **User Authentication:** Secure authentication using JSON Web Tokens (JWT).
- **Message History:** Retrieve chat history for seamless user experience.
- **Scalable Design:** BReal-Time Chat API Service Documentation
  ## Project Overview
  The Real-Time Chat API service provides a robust platform for enabling real-time messaging between users. Designed with scalability and ease of integration in mind, this API supports features such as user authentication, real-time communication, and message history retrieval.
  ---
  ## uilt using Node.js and MongoDB for high performance and scalability.

---

## Installation Guide

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/real-time-chat-api.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd real-time-chat-api
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the Server**:

   ```bash
   npm start
   ```

6. **Access the API**:
   The API will be available at `http://localhost:5000`.

---

## API Documentation

### **Authentication Endpoints**

#### **Register User**

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### **Login User**

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token"
  }
  ```

### **Messaging Endpoints**

#### **Send Message**

- **URL:** `/api/messages`
- **Method:** `POST`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Request Body:**
  ```json
  {
    "to": "recipient_id",
    "message": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Message sent successfully"
  }
  ```

#### **Get Messages**

- **URL:** `/api/messages/:userId`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response:**
  ```json
  [
    {
      "from": "string",
      "to": "string",
      "message": "string",
      "timestamp": "ISODate"
    }
  ]
  ```

---

## Usage Instructions

### **Register a New User**

Use a REST client like Postman or Curl to send a `POST` request to `/api/auth/register` with the required JSON body.

### **Send a Message**

Authenticate using your JWT and send a `POST` request to `/api/messages` with the recipient's ID and message.

### **Retrieve Messages**

Send a `GET` request to `/api/messages/:userId` with your JWT to retrieve messages exchanged with a specific user.

---

## Technologies Used

- **Node.js:** Backend runtime.
- **Express.js:** Framework for building APIs.
- **MongoDB:** NoSQL database for storing user and message data.
- **Socket.IO:** Real-time communication library.
- **JSON Web Tokens (JWT):** Secure authentication.

---

## Contributing Guidelines

We welcome contributions to the Real-Time Chat API project! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy Coding!



