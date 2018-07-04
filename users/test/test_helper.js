const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
    .once('open', () => console.log("okay good to go"))
    .on('error', (error) => {
        console.warn("warning", error);
    });