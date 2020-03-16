const router = require('express').Router();

router.use('/assets', require('./assets'));
router.use('/riot', require('./riot'));

module.exports = router;