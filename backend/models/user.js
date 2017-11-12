const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database');

/**
 * This function is used to check if the input email is valid,
 * the length of email should be between 5 and 30 characters
 * @param {string} email - The input email
 * @returns {boolean} - Whether the email's length is valid
 */
let emailLengthChecker = (email) => {
    if (!email) {
        return false;
    } else {
        if (email.length < 5 || email.length > 30) {
            return false;
        } else {
            return true;
        }
    }
};

/**
 * Check if the email is in correct format 
 * @param {string} email - The input email
 * @returns {boolean} - Return if the email is valid
 */
let validEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email);
    }
};

const emailValidators = [
    {
        validator: emailLengthChecker,
        message: 'E-mail must be at least 5 characters but no more than 30 characters!'
    },
    {
        validator: validEmailChecker,
        message: 'Must be a valid e-mail'
    }
];

/**
 * Check if the length of username is good,
 * the length of username should be less than 15 characters
 * @param {string} username - The input username
 * @returns {boolean} - Check if the username's length is valid
 */
let usernameLengthChecker = (username) => {
    if (!username) {
        return false;
    } else {
        if (username.length > 15) {
            return false;
        } else {
            return true;
        }
    }
};

/**
 * Check if the username is in correct format
 * @param {string} username - The input username
 * @returns {boolean} - Return if username is valid
 */
let validUsername = (username) => {
    if (!username) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
};

const usernameValidators = [
    {
        validator: usernameLengthChecker,
        message: 'Username must be less than 15 characters!'
    },
    {
        validator: validUsername,
        message: 'Username must not have special characters!'
    }
];

/**
 * Check if the password is in the correct range of length,
 * it should be between 8 and 20 characters
 * @param {string} password - The input password
 * @returns {boolean} - Return if the length of password is valid
 */
let passwordLengthChecker = (password) => {
    if (!password) {
        return false;
    } else {
        if (password.length < 8 || password.length > 20) {
            return false;
        } else {
            return true;
        }
    }
};

/**
 * Check if the password is valid,
 * password should be at least 8 characters and include at least
 * one lowercase and at least one uppercase character
 * @param {string} password - The input password
 * @returns {boolean} - Return if the password is valid
 */
let validPassword = (password) => {
    if (!password) {
        return false;
    } else {
        const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        return regExp.test(password);
    }
};

const passwordValidators = [
    {
        validator: passwordLengthChecker,
        message: 'Password must be at least 8 characters but no more than 20 characters!'
    },
    {
        validator: validPassword,
        message: 'Password must have at least one uppercase, lowercase, special character, and number'
    }
];

/**
 * Create a new user
 * @class
 * @classdesc A user schema with username, password, email, nickname
 * gender, dobeditable, emaileditable, passwordeditable, friend
 */
const UserSchema = mongoose.Schema({
    username: {
        type:String,
        required: true,
        validate: usernameValidators,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: passwordValidators
    },
    email: {
        type: String,
        // required: true
        validate: emailValidators,
        unique: true
    },
    nickname: {
        type: String,
        // required: true
    },
    gender: {
        type: Number,
        // required: true
    },
    dob: {
        type: String,
        // required: true
    },
    dobeditable: {
        type: Boolean,
        // required: true
    },
    emaileditable: {
        type: Boolean,
        // required: true
    },
    passwordeditable: {
        type: Boolean,
        // required: true
    },
    friend: {
        type: Array
    }
});

UserSchema.pre('save', function(next){
    if (!this.isModified('password')){
        return next();
    }
    bcrypt.hash(this.password, null, null, (err, hash) => {
        if(err) return next(err);
        this.password = hash;
        next();
    });
});


UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

/**
 * user module
 * @module user
 */
const User = module.exports = mongoose.model('User', UserSchema);


/**
 * This callback is displayed as a part of getUserbyId method
 * @callback getUserCallback
 */

/**
 * Find user by the input id
 * @param {getUserCallback} callback - The callback that handles the response
 * @param {string} id - UserId
 */
module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

 /**
 * This callback is displayed as a part of getUserbyUsername method
 * @callback RequestCallback
 */

/**
 * Find the user by the input username
 * @param {string} username - Username
 * @param {RequestCallback} callback - The callback that handles the response
 */
module.exports.getUserByUsername = function(username, callback) {
    const query = {username : username}
    User.findOne(query, callback);
}


/**
 * Find the user by email
 * @param {string} email - The input email
 * @param {RequestCallback} callback - The callback that handles the response
 */
module.exports.getUserByEmail = function(email, callback) {
    const query = {email : email}
    User.findOne(query, callback);
}

 /**
  * Find User by userId
  * @param {string} userid - Userid
  * @param {RequestCallback} callback - The callback that handles the response
  */
module.exports.getUserByUserID = function(userid, callback) {
    const query = { _id : userid }
    User.findOne(query, callback);
}


/**
 * Add the user to database and hash the password
 * @param {User} newUser - The registered user
 * @param {RequestCallback} - The callback that handles the response
 */
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

/**
 * Update your password
 * @param {User} - The user who wants to update password
 * @param {RequestCallback} - The callback that handles the response
 */
module.exports.updatePassword = function(editUser, callback) {
    bcrypt.hash(editUser.password, null, null, (err, hash) => {
        if (err) return next(err);
        var newvalues = { $set: { password: hash } };
        User.updateOne({ _id: editUser._id }, newvalues, (err, raw) => {
            if (err) throw err;
            else return raw
        })
    });
};

/**
 * Update your email
 * @param {User} editUser - The user who wants to update email
 * @param {RequestCallback} - The callback that handles the response
 */
module.exports.updateEmail = function(editUser, callback) {
    var newvalues = {$set: { email: editUser.email }};
    User.updateOne({_id:editUser._id},newvalues,(err, raw)=>{
        if(err) throw err;
        else return raw
    })
};


/**
 * Compare password with the hashed value in the database
 * @param {string} - The password that is input 
 * @param {string} - The hashed password in the database
 * @param {RequestCallback} - The callback that handles the response
 */
module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
