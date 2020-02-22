const UserRepository = require("../models/repositories/UserRepository");

function createUser(req, res) {
    const user = req.body;

    UserRepository.create(user)
        .then(newUser => {
            res.json(newUser);
        })
        .catch(errors => {
            res.status(500).json({
                errors,
            })
        })
}

module.exports = { createUser };
