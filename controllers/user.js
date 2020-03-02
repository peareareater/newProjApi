const {authError} = require("../constants/user");

const userService = require('../service/user');


function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => {
            if (user) {
                return res.json(user)
            } else {
                return res.status(400).json({
                    message: 'Username or password is incorrect',
                    ...authError
                });
            }
        })
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(user => res.json({user}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function remove(req, res, next) {
    userService.remove(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

module.exports = {authenticate, register, getAll, getCurrent, getById, update, remove};
