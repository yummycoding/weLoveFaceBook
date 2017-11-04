var mongoose = require('mongoose');
var expect = require('chai').expect;
var Post = require('../models/post');
var titleLengthChecker = require('../models/post');

const post = new Post({
        title: "This is a title",
        body: 'I have a new post',
        // createdBy: 'Zhuoru Li',
        // likes: 0,
        // likedBy: [],
        // dislikes: 0,
        // dislikedBy: [],
        // comments: [{
        //     comment: 'This is a good post',
        //     commentator: 'Zhuoru Li'
        // }]
    });

describe('Test the APIs in post', function() {
    it('Title Length checker should return true', function(done){
       expect(titleLengthChecker(post.title).to.equal(true));
       done();
    });
});