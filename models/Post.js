const mongoose = require('mongoose')

// creating a schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "title is required"],
    },
    description: {
        type: String,
        require: [true, "post description required"]
    },
    date: {
        type: String,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: true,
    }

})
// creating model
//Compile schema into model
const Post = mongoose.model("posts", postSchema);

module.exports = Post;

