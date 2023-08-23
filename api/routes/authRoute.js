// Imports
const express = require("express");
const authController = require("../Controllers/authController.js");
const authRouter = express.Router();

// Defining functions for login and register routes
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

// Exporting Router
module.exports = authRouter