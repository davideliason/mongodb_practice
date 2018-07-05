const mongoose = require('mongoose');
const User = require('../src/user');


mongoose.connect("mongodb://userstest:userstest10120@ds227821.mlab.com:27821/users_test", { useNewUrlParser: true })
mongoose.connection
    .once('open', () => console.log("mongoDB connected"))
    .on('error', (error) => {
        console.warn("warning", error);
    });

beforeEach((done) => {
    mongoose.connection.collections.users.drop((() => {
        // callback function when ready
        done();
    }));
})