process.env.NODE_ENV = 'test';


var base = process.env.PWD;
var config = require(base + '/config/database');
 var mongoose = require('mongoose'),
 users = require(base + '/models/user'),
 User = require(base + '/models/user'),
 should = require('should'),
 testUtils = require(base + '/test/utils');
 mongoose.Promise = require('bluebird');

describe("Testing POST API", function() {
 var dummyUser, id;
 before(function (done) {
    mongoose.connect(config.testDb, {useMongoClient: true} ,function() {
        console.log('Connected to: ' + config.testDb);
        done();
    });

  dummyUser = new User({
   username: 'Dummy',
   password: 'zhuoru',
   editable: true
  });

  dummyUser.save(function (err, user) {
   if(err) {
    console.log(err);
   }
   id = user._id;
  });
 });

 describe("Register a new user", function() {
  it("should create a new user", function (done) {
   var req = {
    body: {
     'username': 'Blah blah',
     'password': 'Again blah blah blah',
     'editable': true
    }
   };
   var res = testUtils.responseValidator(200, function (users) {
    users.should.have.property('username');
    users.username.should.equal('Blah blah');
    users.should.have.property('password');
    users.password.should.equal('Again blah blah blah');
    users.should.have.property('editable');
    users.editable.should.equal(true);
    done();
   });
   users.createUser(req, res);
  });

  it('Get new user', function(done) {
    var req = {};
    var res = testUtils.responseValidator(200, function(user) {
        user.length.should.equal(2);
        done();
    })
    users.getUser(req, res);
  });
 })

 after(function(done) {
     User.remove({}, function(err) {
         if(err) {console.log(err);}
     });
     mongoose.disconnect(done);
 })
});