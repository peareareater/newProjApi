const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const User = db.user;

async function authenticate({username, password}) {
    const user = await User.findOne({username});
    if (user && bcrypt.compareSync(password, user.hash)) {
        const {hash, ...userWithoutHash} = user.toObject();
        const token = jwt.sign({sub: user.id}, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

function getAll() {
    return User.find().select('-hash');
}

function getById(id) {
    User.findById(id).select('-hash');
}

async function create(userParam) {
    const {username, password} = userParam;
    if (await User.findOne({username})) {
        throw `Username ${username} is already taken`;
    }
    const user = new User(userParam);

    if (password) {
        user.hash = bcrypt.hashSync(password, 10);
    }
    return await user.save();
}

function remove(id) {
    User.findByIdAndRemove(id);
}

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    remove
};