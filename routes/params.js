const router = require('express').Router();
const { getParams, setParams } = require('../controllers/params');

router.get('/params', getParams);
router.post('/params', setParams)

module.exports = router;