const mongoose = require('mongoose');
const User = require('../../models/user');
const config = require('../../config/database');
const should = require('should');

describe('Users', function() {
    var dummyUser, id;
    before(function(done){
        mongoose.connect(config.testDb, function() {
            console.log('Connected to: ' + config.testDb);
            done();
        });
    });

    dummyUser = new User({
        username: 'Zhuoru',
        password: '123445',
        email: 'lizhuoru19940423@gmail.com'
    });

    dummyUser.save(function(err, user) {
        if (err) {
            console.log(err);
        }
        id = user._id;
    })

    // it('Database should have user', function(done) {
    //     User.findOne({username: 'Zhuoru'}, (err, user) => {
    //         user.password.should.equal('123445');
    //         user.email.should.equal('lizhuoru19940423@gmail.com');
    //         done();
    //     });
    // });

    // after(function(done){
    //     User.remove({}, function(err) {
    //         if (err) {console.log(err);}
    //     });
    //     mongoose.disconnect(done);
    // });
});