const config = require('../config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log('mongo started');
    })
    .catch(e => {
        console.log('mongo connection failed with', e);
    });

module.exports = {
    user: require('../models/User'),
};