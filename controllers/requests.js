const Request = require('../models/request');
const createPDF = require('../helper/createPDF');

const setRequest = (req, res, next) => {
    const data = JSON.parse(req.body.data)
    Request.create({...data})
    .then((movie) => {
        res.status(200).send(movie);    
        createPDF(req.body);
    })
    .catch((err) => {
        if (err.name === 'ValidationError') {
            console.log(err)
            err.statusCode = 400;
            err.message = "Проверьте корректность отправляемых данных."
            next(err)
        } else {
            next(err);
        }
    })
}

const getRequests = (req, res, next) => {
    Request.find({})
        .then(requests => {
            res.status(200).send(requests);
        })
        .catch((e) => {
            next(e);
        })
}

module.exports = {
    setRequest,
    getRequests,
}