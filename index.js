const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.Promise = global.Promise;

const app = express();

app.use('/routes', routes);
mongoose.connect('mongodb://localhost:27017/db', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('mongo started');
        app.listen(8080, () => {
            console.log('server started on 8080')
        })
    })
    .catch(e => {
        console.log('mongo connection failed with', e);
    });