const express = require('express');
const UserController = require("../controllers/user");
const router = express.Router();

router.post('/authenticate', UserController.authenticate);
router.post('/register', UserController.register);
router.get('/', UserController.getAll);
router.get('/current', UserController.getCurrent);
router.get('/:id', UserController.getById);
router.delete('/:id', UserController.remove);

module.exports = router;
