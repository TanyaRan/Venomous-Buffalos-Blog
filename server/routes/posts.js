const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Require the post schema
const User = require('../models/user');
const Post = require('../models/post');

// CreatePost 
router.post('/newpost', (req, res) => {
    /*let newPost = new Post({
        ownerUsername: "gosho",
        name: "New post",
        text: "lorem ipsum dyra byra"
        // ownerUsername: req.body.ownerUsername,
        // name: req.body.name,
        // img: req.body.img,
        // text: req.body.text,
        // dateCreated: req.body.dateCreated,
        // dateEdited: req.body.dateEdited
    });
    */

    if (!req.body.name) {
        res.json({ success: false, message: 'Post title is required.' });
    }
    if (!req.body.text) {
        res.json({ success: false, message: 'Post content is required.' });
    }
    if (!req.body.ownerName) {
        res.json({ success: false, message: 'Post creator is required.' });
    }

    const post = new Post({
        ownerName: req.body.ownerName,
        name: req.body.name,
        img: req.body.img,
        text: req.body.text,
        // dateCreated: dateCreated
    });

    post.save((err) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add post' });
        }

        res.json({ success: true, msg: 'Post added' });
    });

    // Post.addPost(newPost, (err, post) => {
    //     console.log("adding post");
    //     if (err) {
    //         res.json({ success: false, msg: 'Failed to add post' });
    //     } else {
    //         res.json({ success: true, msg: 'Post added' });
    //     }
    // });
});

module.exports = router;
