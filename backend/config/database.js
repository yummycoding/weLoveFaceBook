/**
 * @module Databases in this project
 */
module.exports = {
    /** Database used to store information of users and posts */
    database: 'mongodb://localhost:27017/weLoveFB',
    /** Secret when constructing json web token */
    secret: 'yoursecret',
    /** Database when you test your program */
    testDb: 'mongodb://localhost:27017/testDb'
}