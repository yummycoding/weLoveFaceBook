var should = require('should');
var supertest = require('supertest');
var server = supertest.agent("http://localhost:3000");

describe('Test the users registration API', function(){
    it('should register a right new user', function(done){
        server
        .post('/users/register')
        .send({
            username: 'Zhuoru',
            password: 'Oz65229780!',
            email: 'lizhuoru19940423@gmail.com'
        })
        .end(function(err, res){
            res.status.should.equal(200),
            res.body.success.should.equal(true),
            res.body.message.should.equal('Account registered')
            done();
        });
    });

    it('should return an empty email message', function(done){
        server
        .post('/users/register')
        .send({
            username: 'Zhuoru',
            password: 'Oz65229780!',
            email: ''
        })
        .end(function(err, res){
            res.status.should.equal(200),
            res.body.success.should.equal(false),
            res.body.message.should.equal('You must provide an e-mail')
            done();
        });
    });

    it('should return an empty username message', function(done){
        server
        .post('/users/register')
        .send({
            username: '',
            password: 'Oz65229780!',
            email: 'lizhuoru19940423@gmail.com'
        })
        .end(function(err, res){
            res.status.should.equal(200),
            res.body.success.should.equal(false),
            res.body.message.should.equal('You must provide a username')
            done();
        });
    });

    it('should return an empty password message', function(done){
        server
        .post('/users/register')
        .send({
            username: 'Zhuoru',
            password: '',
            email: 'lizhuoru19940423@gmail.com'
        })
        .end(function(err, res){
            res.status.should.equal(200),
            res.body.success.should.equal(false),
            res.body.message.should.equal('You must provide a password')
            done();
        });
    });
});

describe('Test the user login API', function(){
    it('should login successfully', function(done){
        server
        .post('/users/authenticate')
        .send({
            username: 'Zhuoru',
            password: 'Oz65229780!',
            email: 'lizhuoru19940423@gmail.com'
        })
        .end(function(err, res){
            res.status.should.equal(200),
            res.body.success.should.equal(true),
            res.body.message.should.equal('Success!')
            done();
        });
    });

    it('should login successfully', function(done){
        server
        .post('/users/authenticate')
        .send({
            password: 'Oz65229780!',
            email: 'lizhuoru19940423@gmail.com'
        })
        .end(function(err, res){
            res.status.should.equal(200),
            res.body.success.should.equal(false),
            res.body.message.should.equal('No username was provided.')
            done();
        });
    });
})

