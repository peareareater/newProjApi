const expressJwt = require('express-jwt');
const config = require('../config');
const userService = require('../service/user');

function jwt() {
    const {secret} = config;
    return expressJwt({secret, isRevoked}).unless({
        path: [
            '/user/authenticate',
            '/user/register'
        ]
    })
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    if(!user) {
        return done(null, true);
    }

    done();
}

module.exports = jwt;