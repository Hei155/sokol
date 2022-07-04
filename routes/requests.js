const { setRequest, getRequests } = require('../controllers/requests');
const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');

router.post('/requests', celebrate({
    body: Joi.object().keys({
        serviceType: Joi.string().required().min(2).max(30),
        budget: Joi.string().required().min(1).max(12),
        task: Joi.string().required().min(10).max(500),
        name: Joi.string().required().min(1).max(20),
        phoneNumber: Joi.string().required().min(2).max(11),
        email: Joi.string().email().required().min(3).max(30),
        city: Joi.string().required().min(1).max(20),
        about: Joi.string().required().min(2).max(30), 
        time: Joi.string().required().min(10).max(100),
    })
}), setRequest);

router.get('/textolite', getRequests);

module.exports = router;