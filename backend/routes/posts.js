const express = require('express');
const User = require('../models/user');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const router = express.Router();

router.post('/newPost', (req, res) => {
    if (!req.body.title) {
        res.json({success: false, message: 'Post title is requested!'});
    } else {
        if (!req.body.body) {
            res.json({success: false, message: 'Post body is required!'});
        } else {
            if (!req.body.createdBy) {
                res.json({success: false, message: 'Post creator is required!'});
            } else {
                const post = new Post({
                    title: req.body.title,
                    body: req.body.body,
                    createdBy: req.body.createdBy
                });

                post.save((err) => {
                    if (err) {
                        if (err.errors) {
                            if (err.errors.title) {
                                res.json({success: false, message: err.errors.title.message});
                            } else {
                                res.json({success: false, message: err});
                            }
                        } else {
                            res.json({success: false, message: err});
                        }
                    } else {
                        res.json({success: true, message: 'Post saved successfully!'});
                    }
                });
            }
        }
    }
});

router.get('/allPosts', (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            res.json({success: false, message: err});
        } else {
            if (!posts) {
                res.json({success: false, message: 'No posts found.'});
            } else {
                res.json({success: true, posts: posts});
            }
        }
    }).sort({'_id': -1});
});

module.exports = router;