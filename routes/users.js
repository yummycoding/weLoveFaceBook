const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    delete req.body._id
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email   : req.body.email,
        nickname: req.body.nickname,
        gender  : req.body.gender,
        dob     : req.body.dob,
        emaileditable: false,
        passwordeditable: false
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg:'Failed to register user'});
        } else {
            const token = jwt.sign({ sub: user._id }, config.secret, {
                expiresIn:604800//1 week
            });
            return res.json({
                success:true,
                token:'JWT '+token,
                user:{
                    id:user._id,
                    username:user.username,
                    // password:user.password,
                    email:user.email,
                    nickname:user.nickname,
                    gender:user.gender,
                    dob:user.dob,
                    emaileditable:user.emaileditable,
                    passwordeditable:user.passwordeditable,
                }
            });
            //res.json({success: true, msg:'User registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not fount'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                console.log(user);
                const token = jwt.sign({ sub: user._id }, config.secret, {
                     expiresIn:604800//1 week
                 });
                //console.log(token);
                res.json({
                    success:true,
                    token:'JWT '+token,
                    user:{
                        id:user._id,
                        username:user.username,
                        // password:user.password,
                        email:user.email,
                        nickname:user.nickname,
                        gender:user.gender,
                        dob:user.dob,
                        emaileditable:user.emaileditable,
                        passwordeditable:user.passwordeditable,
                    }
                });
            } else {
                return res.json({success:false, msg:'Wrong password'});
            }
        });
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