const Param = require('../models/param');

const getParams = (req, res, next) => {
    Param.find({})
        .then(params => {
            res.status(200).send(params);
        })
        .catch((e) => {
            next(e);
        })
}

const setParams = (req, res, next) => {
    Param.create({...req.body})
    .then((param) => {
        res.status(200).send(param);
    })
    .catch((err) => {
        if (err.name === 'ValidationError') {
            err.statusCode = 400;
            err.message = "Проверьте корректность отправляемых данных."
            next(err)
        } else {
            next(err);
        }
    })
}

module.exports = { getParams, setParams }