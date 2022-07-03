module.exports = (req, res, next) => {
    const { statusCode = 500, message = 'Ошибка на сервере' } = err;
    res.status(statusCode).send({ message });
    next();
};