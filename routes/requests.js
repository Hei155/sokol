const { setRequest, getRequests } = require('../controllers/requests');
const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const file = require('../middlewares/saveFile')

router.post('/requests', file.single(), setRequest);

router.get('/requests', getRequests);

module.exports = router;