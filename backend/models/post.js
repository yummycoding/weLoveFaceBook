const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

let titleLengthChecker = (title) => {
    if (!title) {
        return false;
    } else {
        if (title.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};

const titleValidators = [{
    validator: titleLengthChecker,
    message: 'Title must be less than 50 characters!'
}];

let bodyLengthChecker = (body) => {
    if (!body) {
        return false;
    } else {
        if (body.length > 500) {
            return false;
        } else {
            return true;
        }
    }
};

const bodyValidators = [
    {
        validator: bodyLengthChecker,
        message: 'Body must be less than 500 characters!'
    }
];

let commentLengthChecker = (comment) => {
    if (!comment[0]) {
        return false;
    } else {
        if (comment[0].length > 200) {
            return false;
        } else {
            return true;
        }
    }
};

const commentValidators = [
    {
        validator: commentLengthChecker,
        message: 'Comments may not exceed 200 characters!'
    }
];

const postSchema = new Schema({
    title: {type: String, required: true, validate: titleValidators},
    body: {type: String, required: true, validate: bodyValidators},
    createdBy: {type: String},
    createdAt: {type: Date, default: Date.now()},
    likes: {type: Number, default: 0},
    likedBy: {type: Array},
    dislikes: {type: Number, default: 0},
    dislikedBy: {type: Array},
    comments: [{
        comment: {type: String, validate: commentValidators},
        commentator: {type: String}
    }],
    img:{type: String}
});

module.exports = mongoose.model('Post', postSchema);