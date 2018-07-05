const mongoose = require('mongoose');
const User = require('../src/user');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect("mongodb://userstest:userstest10120@ds227821.mlab.com:27821/users_test", { useNewUrlParser: true })
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn("warning", error);
        });
});


beforeEach((done) => {
    mongoose.connection.collections.users.drop((() => {
        // callback function when ready
        done();
    }));
})