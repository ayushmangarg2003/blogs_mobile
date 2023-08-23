const Post = require('../Models/PostModel')

// See all Posts
const getPosts = async (req, res) => {
    const post = await Post.find({})
    res.status(200).json(post)
};

// Add a new Post
const addPost = async (req, res) => {
    const { title, desc, image, writer } = req.body
    try {
        const newpost = await Post.post(title, desc, image, writer)
        res.status(200).json({ newpost })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};




// Exporting functions
module.exports = {
    getPosts, addPost
}