const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database');

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

//User Schema
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
    },
    avatar: {
        type: String,
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


const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username : username}
    User.findOne(query, callback);
}

module.exports.getUserByEmail = function(email, callback) {
    const query = {email : email}
    User.findOne(query, callback);
}

module.exports.getUserByUserID = function(userid, callback) {
    const query = { _id : userid }
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}




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

module.exports.updateEmail = function(editUser, callback) {
    var newvalues = {$set: { email: editUser.email }};
    User.updateOne({_id:editUser._id},newvalues,(err, raw)=>{
        if(err) throw err;
        else return raw
    })
};



module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}