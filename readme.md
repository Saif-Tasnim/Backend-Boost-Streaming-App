# Backend Boost Streaming Project

- [Database Modelling Diagram](https://app.eraser.io/workspace/GWqSsu1Bf2UNa7L7YkQU?origin=share)

## Features

### Models

- User Model: Defines the schema for user data including fields like username, email, password, and tokens.
- Video Model: Defines the schema for video data including fields like title, description, URL, and upload date.
- Subscription Model: Defines the schema for subscription data including fields like user ID, subscription type, and expiration date.

### Routes

- Auth Routes: Handles user authentication including login, registration, and token refresh.
- User Routes: Provides endpoints for user-related operations such as fetching user details and updating user information such as update user details, update cover image, update avatar, update password, get total watch history etc.

### Controllers

- Auth Controller: Contains logic for handling authentication requests, validating user credentials, and generating tokens.
- User Controller: Manages user data operations like retrieving user profiles and updating user information.

### Middlewares

- Auth Middleware: Verifies JWT tokens to protect routes and ensure only authenticated users can access certain endpoints.
- Multer Middleware: It used for uploading file such as image, video in database throw multer middleware. Then upload the files in cloudinary.

### Utilities

- Async Handler: Simplifies error handling in asynchronous route handlers.
- API Error: Custom error class for handling API-specific errors.

### Environment Variables

- ACCESS_TOKEN_SECRET: Secret key for signing JWT tokens.
- DATABASE_URL: Connection string for the database.

### Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file.
4. Run the application using `npm start`.

### Dependencies

- Express: Web framework for Node.js.
- Mongoose: MongoDB object modeling tool.
- Jsonwebtoken: Library for creating and verifying JWT tokens.
- Cookie-parser: Middleware for parsing cookies.
