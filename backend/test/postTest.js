var should = require('should');
var supertest = require('supertest');
var server = supertest.agent("http://localhost:3000");

describe('Test the APIs in post', function() {
    it('should list all posts on get method', function(done){
       server
       .get('/posts/allPosts')
       .end(function(err, res) {
           res.status.should.equal(200);
           res.body.success.should.equal(true);
           done();
       });
    });

    describe('Testing the newPost API', function() {
        it('should add a new post', function(done){
            server
            .post('/posts/newPost')
            .send({
                title: 'This is a test post',
                body: 'Someone is testing',
                createdBy: 'Zhuoru'
            })
            .end(function(err, res){
                res.status.should.equal(200);
                res.body.success.should.equal(true);
                res.body.message.should.equal('Post saved successfully!');
                done();
            });
        });
    
        it('should return an empty title message', function(done){
            server
            .post('/posts/newPost')
            .send({
                title: '',
                body: 'Someone is testing',
                createdBy: 'Zhuoru'
            })
            .end(function(err, res){
                res.status.should.equal(200);
                res.body.success.should.equal(false);
                res.body.message.should.equal('Post title is requested!');
                done();
            });
        });
    
        it('should return an empty body message', function(done){
            server
            .post('/posts/newPost')
            .send({
                title: 'This is a test',
                body: '',
                createdBy: 'Zhuoru'
            })
            .end(function(err, res){
                res.status.should.equal(200);
                res.body.success.should.equal(false);
                res.body.message.should.equal('Post body is required!');
                done();
            });
        });
    
        it('should return an empty creator message', function(done){
            server
            .post('/posts/newPost')
            .send({
                title: 'This is a test',
                body: 'Someone is testing',
                createdBy: ''
            })
            .end(function(err, res){
                res.status.should.equal(200);
                res.body.success.should.equal(false);
                res.body.message.should.equal('Post creator is required!');
                done();
            });
        });
    });

    

});