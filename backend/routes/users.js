const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    if(!req.body.email) {
        res.json({success: false, message: 'You must provide an e-mail'});
    } else {
        if (!req.body.username) {
            res.json({success: false, message: 'You must provide a username'});
        } else {
            if (!req.body.password) {
                res.json({success: false, message: 'You must provide a password'});
            } else {
                let user = new User({
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password
                });
                user.save((err) => {
                    if(err){
                        if (err.code === 11000) {
                            res.json({success: false, message: 'Username or e-mail already exists'});
                        } else {
                            if (err.errors) {
                                if (err.errors.email) {
                                    res.json({success: false, message: err.errors.email.message});
                                } else {
                                    if (err.errors.username) {
                                        res.json({success: false, message: err.errors.username.message});
                                    } else {
                                        if (err.errors.password) {
                                            res.json({success: false, message: err.errors.password.message});
                                        } else {
                                            res.json({success: false, message: err});
                                        }
                                    }
                                }
                            } else {
                                res.json({success: false, message: 'Could not save user. Error: ', err});
                            }
                        }
                    } else {
                        res.json({success: true, message: 'Account registered'});
                    }
                });
            }
        }
    }
});

//Authenticate 
//Notice :changed here from /authenticate to /login
router.post('/login', (req, res) => {
    if (!req.body.username) {
        res.json({success: false, message: 'No username was provided.'})
    } else {
        if (!req.body.password) {
            res.json({success: false, message: 'No password was provided.'});
        } else {
            User.findOne({username: req.body.username}, (err, user) => {
                if(err) {
                    res.json({success: false, message: err});
                } else {
                    if (!user) {
                        res.json({success: false, message: 'Username not found.'});
                    } else {
                        const validPassword = user.comparePassword(req.body.password);
                        if (!validPassword) {
                            res.json({success: false, message: 'Invalid password.'});
                        } else {
                            const token = jwt.sign({userId: user._id}, config.secret, {expiresIn: '24h'});
                            res.json({success: true, 
                                      message: 'Success!',
                                      token: token,
                                      user: {
                                            username: user.username
                                      }
                                    });
                        }
                    }
                }
            })
        }
    }
});

// given an username string, returns all data of that user
router.get('/getuserbyusername/:username', (req, res, next) => {
    // console.log('Server > GET user by user name > ',req.params.username);
    User.getUserByUsername(req.params.username, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not fount'});
        }
        // console.log("Server > User returned by server", user);
        return res.json(user);
    })
});

router.get('/getuserbyuserid/:userid', (req, res, next) => {
     console.log('Server > GET user by user id > ',req.params.userid);
     User.getUserByUserID(req.params.userid, (err, user) =>{
         if(err) throw err;
         if(!user){
             return res.json({success: false, msg:'User not found'});
         }
         // console.log("Server > User returned by server", user);
         return res.json(user);
     })
});

router.put('/updatepassword/:id', (req, res, next) => {
    console.log("Server > PUT 'users/:id' > id", req.params.id);
    console.log("Server > PUT 'users/:id' > user", req.body);
    User.updatePassword(req.body, (err, user) => {
        if(err) {
            res.json({success: false, msg:'Failed to update password'});
        } else {
            return res.json(user);
            //res.json({success: true, msg:'User registered'});
        }
    })
});

router.put('/updateemail/:id', (req, res, next) => {
    console.log("Server > PUT 'users/:id' > id", req.params.id);
    console.log("Server > PUT 'users/:id' > user", req.body);
    User.updateEmail(req.body, (err, user) => {
        if(err) {
            res.json({success: false, msg:'Failed to update email'});
        } else {
            return res.json(user);
            //res.json({success: true, msg:'User registered'});
        }
    })
});


// //Profile
// router.get('/profile', (req, res, next) => {
//     res.send('PROFILE');
// });

module.exports = router;