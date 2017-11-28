/**
 * Require the mongoose module
 * For further information, check out
 * {@link https://www.npmjs.com/package/mongoose|mongoose}
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

/**
 * This function is used to test whether the length
 * of title is valid
 * @param {String} title The title you input
 * @returns {boolean} Whether valid or not
 */
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

/**
 * This function is used to check if the body length is valid,
 * the length cannot be longer than 500 characters
 * @param {string} body 
 * @returns {boolean} Whether body is valid or not
 */
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

/**
 * This function is used to check if the length of comment 
 * is valid, length of comment cannot be longer than 200 characters
 * @param {string} comment 
 * @returns {boolean}
 */
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

/**
 * Create a new post
 * @class
 * @classdesc Post schema with title, body, createdBy, createdAt, number of likes, 
 * number of dislikes, who likes it, who dislikes it, comments
 */
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

/**
 * @module Post
 * export the post module
 */
module.exports = mongoose.model('Post', postSchema);