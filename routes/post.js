const express = require('express')
const Post = require('../models/Post')
// creating route
const route = express.Router()
// getting all post
route.get('/', async (req, res) => {
    try {
        const allPost = await Post.find()
        req.json(allPost)

    } catch (error) {
        console.log(`error occured while fetching data ${error}`)
    }
})

// inserting data to model
route.post("/", async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            description: req.body.description
        })
        res.json(post);
    } catch (error) {
        res.json(`error occured ${error.message}`);
    }
});
// deleting
route.delete("/:postId", async (req, res) => {
    try {
        await Post.findByIdAndRemove({ _id: req.params.postId })
        res.json({ message: "deleted a post" })
    } catch (error) {
        console.log(`Erro while deleting a post ${error}`)
    }

})
route.patch('/:postId', async (req, res) => {
    try {
        await Post.updateOne({ _id: req.params.postId }, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        })
        res.json({ message: "post updated" })
    } catch (error) {
        console.log(`error occured while updating ${error}`)
    }
})
// getting specific element using id
route.get('/:postId', async (res, req) => {
    try {
        const post = await Post.findById(req.params.postId)
        console.log(req.params)
        console.log(post)

    } catch (error) {
        console.log(`error occured while fetching data ${error}`)
    }
})

module.exports = route