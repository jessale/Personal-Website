const mongoose = require('mongoose');


const aboutSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    weight: {type: Number, required: true},
    height: Number,
    birthday: String,
    location: String,
    email: String,
    pgp: String,
    status: String,
    online: Boolean
}, {
    '_id': false,
    versionKey: false,
    collection : 'about'
});

module.exports = mongoose.model('About', aboutSchema);
