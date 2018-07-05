const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
    name: String
});

// User class and User model, reprs the entire collection of data
const User = mongoose.model('user', UserSchema);

// export model so can be accessed elsewhere
module.exports = User;
