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
                    username: req.body.username,
                    password: req.body.password,
                    email   : req.body.email,
                    nickname: req.body.nickname,
                    gender  : req.body.gender,
                    dob     : req.body.dob,
                    friend  : req.body.friend,
                    emaileditable: false,
                    passwordeditable: false
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
                        const token = jwt.sign({ sub: user._id }, config.secret, {
                            expiresIn:604800//1 week
                        });
                        return res.json({
                            success:true,
                            token:'JWT '+token,
                            user:{
                                _id:user._id,
                                username:user.username,
                                // password:user.password,
                                email:user.email,
                                nickname:user.nickname,
                                gender:user.gender,
                                dob:user.dob,
                                friend:user.friend,
                                emaileditable:user.emaileditable,
                                passwordeditable:user.passwordeditable,
                            },
                            message: 'Account registered'
                        });
                        //res.json({success: true, message: 'Account registered'});
                    }
                });
            }
        }
    }
});

//Authenticate 
//Notice :changed here from /authenticate to /login
router.post('/authenticate', (req, res) => {
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
                            const token = jwt.sign({ sub: user._id }, config.secret, {
                                expiresIn:604800//1 week
                            });
                           //console.log(token);
                           res.json({
                               success:true,
                               token:'JWT '+token,
                               user:{
                                   _id:user._id,
                                   username:user.username,
                                   // password:user.password,
                                   email:user.email,
                                   nickname:user.nickname,
                                   gender:user.gender,
                                   dob:user.dob,
                                   friend:user.friend,
                                   emaileditable:user.emaileditable,
                                   passwordeditable:user.passwordeditable,
                               },
                               message: 'Success!'
                           });
                            // const token = jwt.sign({userId: user._id}, config.secret, {expiresIn: '24h'});
                            // res.json({success: true, 
                            //           message: 'Success!',
                            //           token: token,
                            //           user: {
                            //                 username: user.username
                            //           }
                            // });
                        }
                    }
                }
            });
        }
    }
});

router.get('/checkEmail/:email', (req, res) => {
    if (!req.params.email) {
        res.json({success: false, message: 'E-mail was not provided'});
    } else {
        User.findOne({email: req.params.email}, (err, user) => {
            if (err) {
                res.json({success: false, message: err});
            } else {
                if (user) {
                    res.json({success: false, message: 'E-mail is already taken'});
                } else {
                    res.json({success: true, message: 'E-mail is available'});
                }
            }
        });
    }
});

router.get('/checkUsername/:username', (req, res) => {
    if (!req.params.username) {
        res.json({success: false, message: err});
    } else {
        User.findOne({username: req.params.username}, (err, user) => {
            if (err) {
                res.json({success: false, message: err});
            } else {
                if (user) {
                    res.json({success: false, message: 'Username is already taken'});
                } else {
                    res.json({success: true, message: 'Username is available'});
                }
            }
        });
    }
});

router.get('/profile', (req, res) => {
    User.findOne({_id: req.decoded.userId}).select('username email').exec((err, user) => {
        if (err) {
            res.json({success: false, message: 'User not found'});
        } else {
            res.json({success: true, user: user});
        }
    });
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
// given an user email, return all data of that user

router.get('/getuserbyemail/:email', (req, res, next) => {
    //console.log('Server > GET user by email > ',req.params.email);
    User.getUserByEmail(req.params.email, (err, user) =>{
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
    console.log("Server > PUT 'users/updatepassword/:id' > id", req.params.id);
    console.log("Server > PUT 'users/updatepassword/:id' > user", req.body);
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
    console.log("Server > PUT 'users/updateemail/:id' > id", req.params.id);
    console.log("Server > PUT 'users/updateemail/:id' > user", req.body);
    User.updateEmail(req.body, (err, user) => {
        if(err) {
            res.json({success: false, msg:'Failed to update email'});
        } else {
            return res.json(user);
            //res.json({success: true, msg:'User registered'});
        }
    })
});

router.put('/updatefriend/:id', (req, res, next) => {
    console.log("Server > PUT 'users/updatefriend/:id' > id", req.params.id);
    console.log("Server > PUT 'users/updatefriend/:id' > user", req.body);
    User.findByIdAndUpdate(req.params.id,
    {
        $set:{ friend: req.body.friend }
    },
    function(err, updatedUser) {
        if(err) {
            res.send("Failed updating the friend")
        }else{
            res.json(updatedUser);
        }
    });
});


module.exports = router;