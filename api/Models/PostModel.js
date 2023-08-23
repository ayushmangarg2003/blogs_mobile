// Imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

// User Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    }
});

// User Register Method
postSchema.statics.post = async function (title, desc, image, writer) {
    if (!title || !desc || !image || !writer) {
        throw Error('All fields must be filled')
    }
    const blog = await this.create({ title, desc, image, writer })
    return blog
}

// User Login Method
// userSchema.statics.login = async function (email, password) {
//     if (!email || !password) {
//         throw Error('All fields must be filled')
//     }

//     const user = await this.findOne({ email })
//     if (!user) {
//         throw Error('User does not exist')
//     }

//     const match = await bcrypt.compare(password, user.password)

//     if (!match) {
//         throw Error('Incorrect Credentials')
//     }

//     return user
// }

// Exporting User Model
module.exports = mongoose.model('Blogs', postSchema);