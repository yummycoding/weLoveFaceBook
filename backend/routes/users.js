/**
 * Express router providing user related routes
 * @module routes/users
 * @requires express
 */
const express = require('express');

/**
 * Express router to mount users
 * @type {object}
 * @constant
 * @namespace usersRouter
 */
const router = express.Router();

/**
 * Passport is Express-compatible authentication middleware, For more information,
 * see {@link https://www.npmjs.com/package/passport|passport-npm}.
 * @module passport
 * @const
 */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

/**
 * Hash passwords, For more information, please see 
 * {@link https://www.npmjs.com/package/bcrypt-nodejs|bcrypt-nodejs}
 * @module bcrypt
 * @const
 */
const bcrypt = require('bcrypt-nodejs');

/**
 * Router serving register a new user
 * @name post/register
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
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
                    avatar  : req.body.avatar,
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
                                avatar:user.avatar,
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


/**
 * Router serving login a user
 * @name post/authenticate
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
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
                                expiresIn:'24h'//The jwt will expire in 24h
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
                                   avatar:user.avatar,
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

/**
 * Router serving checking email of a user
 * @name get/checkEmail
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/checkEmail/:email', (req, res) => {
    console.log('GET > /checkEmail/:email > email', req.params.email);
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

/**
 * Router serving checking if username is valid
 * @name get/checkUsername
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/checkUsername/:username', (req, res) => {
    console.log('GET > /checkUsername/:username > username', req.params.username);
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

router.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        res.json({success: false, message: 'No token provided'})
    } else {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                res.json({success: false, message: 'Token invalid ' + err});
            } else {
                req.decoded = decoded;
                next();
            }
        })
    }
})

/**
 * Router serving getting profile
 * @name get/profile
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/profile', (req, res) => {
    User.findOne({_id: req.decoded.sub}).select('username email').exec((err, user) => {
        if (err) {
            res.json({success: false, message: 'User not found'});
        } else {
            res.json({success: true, user: user});
        }
    });
});


/**
 * Router serving getting user by username
 * @name get/getuserbyusername
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
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


/**
 * Router serving getuserbyemail
 * @name get/getuserbyemail
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
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


/**
 * Router serving getting user by userid
 * @name get/getuserbyuserid
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
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

// router.put('/updatepassword/:id', (req, res, next) => {
//     console.log("Server > PUT 'users/updatepassword/:id' > id", req.params.id);
//     console.log("Server > PUT 'users/updatepassword/:id' > user", req.body);
//     User.updatePassword(req.body, (err, user) => {
//         if(err) {
//             res.json({success: false, msg:'Failed to update password'});
//         } else {
//             return res.json(user);
//             //res.json({success: true, msg:'User registered'});
//         }
//     })
// });

/**
 * Router serving updating password
 * @name put/updatepassword
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/updatepassword/:id', (req, res, next) => {
    console.log("Server > PUT 'users/updatepassword/:id' > id", req.params.id);
    console.log("Server > PUT 'users/updatepassword/:id' > user", req.body);
    bcrypt.hash(req.body.password, null, null, (err, hash) => {
        if (err) {
            return res.json({success: false, msg:'Failed to hash password'});
        } else {
           var queary = { $set: { password: hash } };
           User.findByIdAndUpdate(req.params.id,queary,function(err,updatedUser){
               if(err) {
                   return res.json({success: false, msg:'Failed to update password'});
               } else {
                   res.json(updatedUser);
               }
           })
        }
    });
});

/**
 * Router serving updating email
 * @name put/updateemail
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/updateemail/:id', (req, res, next) => {
    console.log("Server > PUT 'users/updateemail/:id' > id", req.params.id);
    console.log("Server > PUT 'users/updateemail/:id' > user", req.body);
    var queary = { $set:{email: req.body.email} }
    User.findByIdAndUpdate(req.params.id,queary,function(err,updatedUser){
        if(err) {
            return res.json({success: false, msg:'Failed to update email'});
        } else {
            res.json(updatedUser);
        }
    })
});

/**
 * Router serving adding a new friend to friend list
 * @name put/updatefriend
 * @function
 * @memberof module: routes/users~usersRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
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

router.put('/updateavatar/:id', (req, res, next) => {
    console.log("Server > PUT 'users/updatefriend/:id' > id", req.params.id);
    //console.log("Server > PUT 'users/updatefriend/:id' > user", req.body.avatar);
    User.findByIdAndUpdate(req.params.id,
    {
        $set:{ avatar: req.body.avatar }
    },
    function(err, updatedUser) {
        if(err) {
            res.send("Failed updating the friend")
        }else{
            res.json(updatedUser);
        }
    });
});

router.get('/getallfriends/:username', (req, res) => {
    console.log('GET > /getallfriends/:username > username', req.params.username);
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
                var qarray = [{username: req.params.username}];
                curUser[0].friend.forEach(function(friendraw) {
                    var friendallinfo = friendraw.split("$$"); // parse friend
                    qarray.push({username: friendallinfo[1]});
                });
                // console.log("qarray to get post: ",qarray);
                var query = { $or: qarray};
                User.find( query, (err, users) => {
                    if (err) {
                        res.json({success: false, message: err});
                    } else {
                        if (!users) {
                            res.json({success: false, message: 'No users found.'});
                        } else {
                            res.json({success: true, users: users});
                        }
                    }
                }).sort({'_id': -1});
            }
        }
    })
});

module.exports = router;