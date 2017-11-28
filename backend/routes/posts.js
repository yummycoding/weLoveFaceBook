/** 
 * An http helper
 * For more information about express, see
 * {@link https://www.npmjs.com/package/express|express-npm} for more information
 * @module routes/posts
 * @const
 * */
const express = require('express');

/**@requires module -User module*/
const User = require('../models/user');

/**@requires module - Post module*/
const Post = require('../models/post');

/**
 * Jwt is a compact URL-safe means of representing claims to be transformed between
 * two parties. For more information about jwt, see {@link https://www.npmjs.com/package/jsonwebtoken|jwt-npm}.
 * @requires module - Jwt module
 */
const jwt = require('jsonwebtoken');

/**
 * Express router to mount posts
 * @type {object}
 * @constant
 * @namespace postsRouter
 */
const router = express.Router();

/**
 * Router serving sending a new post
 * @name post/newPost
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/newPost', (req, res) => {
    console.log('POST > posts/newPost');
    if (!req.body.title) {//Title should not be empty 
        res.json({success: false, message: 'Post title is requested!'});
    } else {
        if (!req.body.body) {//body should not be empty
            res.json({success: false, message: 'Post body is required!'});
        } else {
            if (!req.body.createdBy) {//There should be someone who create this post
                res.json({success: false, message: 'Post creator is required!'});
            } else {//create a new post schema
                const post = new Post({
                    title: req.body.title,
                    body: req.body.body,
                    img: req.body.img,
                    createdBy: req.body.createdBy,
                    createdAt: req.body.createdAt
                });
                post.save((err) => {
                    if (err) {
                        if (err.errors) {//Check if the post is valid
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

/**
 * Route serving getting all posts
 * @name get/allPosts
 * @function
 * @memberof module: routes/posts~postsRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
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

/**
 * Route serving getting posts from username
 * @name get/getHomePosts
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/getHomePosts/:username', (req, res) => {
    console.log('GET > /getHomePosts/:username > username', req.params.username);
    User.find({username:req.params.username},(err, curUser) => {
        if(err) {
            res.json({success: false, message: err});
        } else {
            if(curUser.length === 0) {
                res.json({success: false, message: 'username:'+req.params.username+'does not exist'});
            }else if(curUser.length !== 1) {
                res.json({success: false, message: 'multiple users are called(username): '+req.params.username});
            }else{ // the only curUser were found using username
                // found query array 
                var qarray = [{createdBy: req.params.username}];
                curUser[0].friend.forEach(function(friendraw) {
                    var friendallinfo = friendraw.split("$$"); // parse friend
                    qarray.push({createdBy: friendallinfo[1]});
                });
                // console.log("qarray to get post: ",qarray);
                var query = { $or: qarray};
                Post.find( query, (err, posts) => {
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
            }
        }
    })
});

/**
 * Routing serving getting my own posts
 * @name get/getSelfPosts
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path -Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/getSelfPosts/:username', (req, res) => {
    console.log('GET > /getSelfPosts/:username > username',req.params.username)
    Post.find({ createdBy: req.params.username }, (err, posts) => {
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

/**
 * Route serving update Posts
 * @name put/updatePost
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/updatePost', (req, res) => {
    if (!req.body._id) {
        res.json({success: false, message: 'No post id provided'});
    } else {
        Post.findOne({_id: req.body._id}, (err, post) => {
            if (err) {
                res.json({success: false, message: 'Not a valid post id'});
            } else {
                if(!post) {
                    res.json({success: false, message: 'Post id was not found'});
                } else {
                    User.findOne({_id: req.decoded.userId}, (err, user) => {
                        if (err) {
                            res.json({success: false, message: err});
                        } else {
                            if (!user) {
                                res.json({success: false, message: 'Unable to authenticate user'})
                            } else {
                                if (user.username !== post.createdBy) {
                                    res.json({success: false, message: 'You are not authorized to edit this blog post.'})
                                } else {
                                    post.title = req.body.title;
                                    post.body = req.body.body;
                                    post.save((err) => {
                                        if (err) {
                                            if(err.errors) {
                                                res.json({success: false, message: 'Please ensure the form is filled out properly'});
                                            } else {
                                                res.json({success: false, message: err});
                                            }
                                        } else {
                                            res.json({success: true, message: 'Your post was updated successfully!'})
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            }
        })
    }
});

/**
 * Routes deleting posts
 * @name delete/deletePost
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.delete('/deletePost/:id', (req, res) => { 
    console.log('DELETE > /deletePost/:id > id', req.params.id);
    if (!req.params.id) {
        res.json({success: false, message: 'No id provided'});
    } else {
        Post.findOne({_id: req.params.id}, (err, post) => {
            if (err) {
                res.json({success: false, message: 'Invalid id'});
            } else {
                if (!post) {
                    res.json({success: false, message: 'Post was not found'});
                } else {
                    post.remove((err) => {
                        if (err) {
                            res.json({success: false, message: err});
                        } else {
                            res.json({success: true, message: 'Post deleted successfully!'});
                        }
                    })
                }
            }
        });
    };
});

/**
 * Route serving like posts
 * @name put/likePosts
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/likePostOrCancelLike/:username', (req,res) => {
    if (!req.body._id) {
        res.json({success: false, message: 'No id for post was provided'});
    } else {
        Post.findOne({_id: req.body._id}, (err, post) => { // check if post exists according to postid and get that post from db
            if (err) {
                res.json({success: false, message: 'Cannot find post using postid provided'});
            } else {
                User.findOne({username: req.params.username}, (err, user) => { // check if username is valid (exists in db)
                    if (err) {
                        res.json({success: false, message: 'Cannot find username using username provided'});
                    } else { //user name exists, we can save that username to post object's liked field or cancel
                        if(post.likedBy.includes(req.params.username)){ // cancel like
                            var idx = post.likedBy.indexOf(req.params.username);
                            post.likedBy.splice(idx,1);
                            post.likes--;
                            post.save((err) => {
                                if (err) {
                                    res.json({success: false, message: err});
                                } else {
                                    res.json({success: true, message: 'cancel liked post'});
                                }
                            });
                        } else { // add like
                            post.likedBy.push(req.params.username);
                            post.likes++;
                            post.save((err) => {
                                if (err) {
                                    res.json({success: false, message: err});
                                } else {
                                    res.json({success: true, message: 'add liked post'});
                                }
                            });
                        }
                    }
                })
            }
        })
    }
})

//Like the post
router.put('/likePost', (req, res) => {
    if (!req.body.id) {
        res.json({success: false, message: 'No id was provided'});
    } else {
        Post.findOne({_id: req.body.id}, (err, post) => {
            if (err) {
                res.json({success: false, message: 'Invalid post id'});
            } else {
                User.findOne({_id: req.decode.userId}, (err, user) => {
                    if (err) {
                        res.json({success: false, message: 'Something went wrong'});
                    } else {
                        if (!user) {//check if user is valid to like this post
                            res.json({success: false, message: 'Could not authenticate user.'});
                        } else {
                            if (user.username === post.createdBy) {
                                res.json({success: false, message: 'Cannot like your own post.'});
                            } else {
                                if (post.likedBy.includes(user.username)) {
                                    res.json({success: false, message: 'You already liked this post.'});
                                } else {//If you dislike this post, then you click like button
                                    if (post.dislikedBy.includes(user.username)) {
                                        post.dislikedBy.splice(arrayIndex, 1);
                                        post.likes++;
                                        post.likedBy.push(user.username);
                                        post.save((err) => {
                                            if (err) {
                                                res.json({success: false, message: 'Something went wrong.'});
                                            } else {
                                                res.json({success: true, message: 'Post liked!'});
                                            }
                                        });
                                    } else {
                                        post.likes++;
                                        post.likedBy.push(user.username);
                                        post.save((err) => {
                                            if (err) {
                                                res.json({success: false, message: 'Something went wrong'});
                                            } else {
                                                res.json({success: true, message: 'Post liked!'});
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    }
                });
            }
        });
    }
});

/**
 * Routes serving dislike Post
 * @name put/dislikePost
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/dislikePost', (req, res) => {
    if (!req.body.id) {//If you want to dislike the post, you should provide id
        res.json({success: false, message: 'No id was provided.'});
    } else {
        Post.findOne({_id: req.body.id}, (err, blog) => {//Get the post you want to dislike
            if (err) {
                res.json({success: false, message: 'Invalid post id'});
            } else {
                if (!post) {//If the post does not exist, you cannot dislike it
                    res.json({success: false, message: 'That post was not found'});
                } else {
                    User.findOne({_id: req.decoded.userId}, (err, user) => {
                        if (err) {//Get the user who logs in
                            res.json({success: false, message: 'Something went wrong.'});
                        } else {
                            if (!user) {
                                res.json({success: false, message: 'Could not authenticate user.'});
                            } else {//You cannot dislike your own post
                                if (user.username === post.createdBy) {
                                    res.json({success: false, message: 'You already disliked this post'});
                                } else {//Check if you have liked this post before
                                    if (post.likedBy.includes(user.username)) {
                                        post.likes--;
                                        const arrayIndex = post.likedBy.indexOf(user.username);
                                        post.likedBy.splice(arrayIndex, 1);
                                        post.dislikes++;
                                        post.dislikedBy.push(user.username);
                                        post.save((err) => {
                                            if (err) {
                                                res.json({success: false, message: 'Something went wrong'});
                                            } else {
                                                res.json({success: true, message: 'Post disliked!'});
                                            }
                                        });
                                    } else {
                                        post.dislikes++;
                                        post.dislikedBy.push(user.username);
                                        post.save((err) => {
                                            if (err) {//Dislike this post successfully
                                                res.json({success: false, message: 'Something went wrong.'});
                                            } else {
                                                res.json({success: true, message: 'Post disliked!'});
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

/**
 * Routes serving posting comments
 * @name post/comment
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/comment', (req, res) => {
    // Check if comment was provided in request body
    if (!req.body.comment) {
      res.json({ success: false, message: 'No comment provided' }); // Return error message
    } else {
      // Check if id was provided in request body
      if (!req.body.id) {
        res.json({ success: false, message: 'No id was provided' }); // Return error message
      } else {
        // Use id to search for blog post in database
        Post.findOne({ _id: req.body.id }, (err, post) => {
          // Check if error was found
          if (err) {
            res.json({ success: false, message: 'Invalid Post id' }); // Return error message
          } else {
            // Check if id matched the id of any blog post in the database
            if (!post) {
              res.json({ success: false, message: 'Post not found.' }); // Return error message
            } else {
              // Grab data of user that is logged in
              User.findOne({ _id: req.body.id }, (err, user) => {
                // Check if error was found
                if (err) {
                  res.json({ success: false, message: 'Something went wrong' }); // Return error message
                } else {
                  // Check if user was found in the database
                  if (!user) {
                    res.json({ success: false, message: 'User not found.' }); // Return error message
                  } else {
                    // Add the new comment to the blog post's array
                    post.comments.push({
                      comment: req.body.comment, // Comment field
                      commentator: user.username // Person who commented
                    });
                    // Save blog post
                    post.save((err) => {
                      // Check if error was found
                      if (err) {
                        res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                      } else {
                        res.json({ success: true, message: 'Comment saved' }); // Return success message
                      }
                    });
                  }
                }
              });
            }
          }
        });
      }
    }
  });

/**
 * Routes serving updateComment
 * @name put/updateComment
 * @function
 * @memberof module: routes/posts~postsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/updateComment/:id', (req, res, next) => {
    console.log("Server > PUT 'posts/updateComment/:id' > id", req.params.id);
    console.log("Server > PUT 'posts/updateComment/:post' > post", req.body);
    Post.findByIdAndUpdate(req.params.id,
        {
            $set: { comments: req.body.comments }
        },
        function (err, updatedPost) {
            if (err) {
                res.send("Failed updating the friend")
            } else {
                res.json(updatedPost);
            }
        });
});



/**
 * A module that can post, update, delete
 * @module post
 */
module.exports = router;