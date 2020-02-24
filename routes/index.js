const router = require('express').Router();
const { errorHandler } = require('../helpers');
router.use('/user', require('./users'));

router.use(errorHandler);

module.exports = router;
