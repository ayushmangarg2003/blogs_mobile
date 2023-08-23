// Imports
const express = require("express");
const postController = require("../Controllers/postController.js");
const postRouter = express.Router();

// Defining functions for different routes
postRouter.get('/', postController.getPosts)
postRouter.post('/', postController.addPost)

// Exporting Router
module.exports = postRouter;