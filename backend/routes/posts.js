const express = require('express');
const User = require('../models/user');
const Post = require('../models/post');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const router = express.Router();

router.post('/newPost', (req, res) => {
    console.log('POST > posts/newPost');
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

// Given username, find all of its friends first, search in database all posts from both 
// userhimself and his friends
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
                console.log("curUser friends found using username",curUser[0].friend)
                var qarray = [{createdBy: req.params.username}];
                curUser[0].friend.forEach(function(friendraw) {
                    console.log(friendraw);
                    // parse friend
                    var friendallinfo = friendraw.split("$$");
                    qarray.push({createdBy: friendallinfo[1]});
                });
                console.log("qarray to get post: ",qarray);
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

// get all posts sent by user: username
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

router.delete('/deleteBlog/:id', (req, res) => { 
    console.log('DELETE > /deleteBlog/:id > id', req.params.id);
    if (!req.params.id) {
        res.json({success: false, message: 'No id provided'});
    } else {
        Post.findOne({_id: req.params.id}, (err, post) => {
            if (err) {
                res.json({success: false, message: 'Invalid id'});
            } else {
                if (!post) {
                    res.json({success: false, message: 'Blog was not found'});
                } else {
                    User.findOne({_id: req.decoded.userId}, (err, user) => {
                        if (err) {
                           res.json({success: false, message: err});
                        } else {
                            if (!user) {
                                res.json({success: false, message: 'Unable to authenticate user'});
                            } else {
                                if (user.username !== post.createdBy) {
                                    res.json({success: false, message: 'You are not authorized to delete this post'});
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
                        }
                    })
                }
            }
        });
    }
});

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
                        if (!user) {
                            res.json({success: false, message: 'Could not authenticate user.'});
                        } else {
                            if (user.username === post.createdBy) {
                                res.json({success: false, message: 'Cannot like your own post.'});
                            } else {
                                if (post.likedBy.includes(user.username)) {
                                    res.json({success: false, message: 'You already liked this post.'});
                                } else {
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

router.put('/dislikePost', (req, res) => {
    if (!req.body.id) {
        res.json({success: false, message: 'No id was provided.'});
    } else {
        Post.findOne({_id: req.body.id}, (err, blog) => {
            if (err) {
                res.json({success: false, message: 'Invalid post id'});
            } else {
                if (!post) {
                    res.json({success: false, message: 'That post was not found'});
                } else {
                    User.findOne({_id: req.decoded.userId}, (err, user) => {
                        if (err) {
                            res.json({success: false, message: 'Something went wrong.'});
                        } else {
                            if (!user) {
                                res.json({success: false, message: 'Could not authenticate user.'});
                            } else {
                                if (user.username === post.createdBy) {
                                    res.json({success: false, message: 'You already disliked this post'});
                                } else {
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
                                            if (err) {
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
              User.findOne({ _id: req.decoded.userId }, (err, user) => {
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

module.exports = router;