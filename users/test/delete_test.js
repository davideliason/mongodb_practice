const assert = require('assert');
const User = require('../src/user'); // model class

describe('Deleting a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: "Joe" });
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method remove', (done) => {
        User.remove({ name: "Joe" })
            .then(() => User.findOne({ name: "Joe" }))
            .then((user) => {
                assert(user === null);
                done();
            })
    });

    it('class method findOneAndRemove', (done) => {
        User.findOneAndRemove({ name: "Joe" })
            .then(() => User.findOne({ name: "Joe" }))
            .then((user) => {
                assert(user === null);
                done();
            })
    });

    it('class method findByIdAndRemove', () => {

    });
});

describe('Creating records', () => {
    it('saves a user', (done) => {
        // mdodel instance
        const joe = new User({
            name: "Joe"
        });

        joe.save()
            .then(() => {
                // successful save?
                assert(!joe.isNew);
                done();
            })
    });
});