const { NODE_ENV } = process.env;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/requests');
const errorHelper = require('./helper/error');

const { PORT, MONGO_LINK, ALLOWED__LINK } = NODE_ENV === 'production' ? process.env : require('./utils/config')

async function start() {
    try {
        await mongoose.connect(MONGO_LINK, {
            useNewUrlParser: true,
        });
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}...`)
        })
    } catch(e) {
        console.log(e);
    }
}

app.use(express.json({ extended: true }));

app.use('*', cors({
  origin: [
    ALLOWED__LINK,
  ],
  allowedHeaders: ['Content-Type', 'origin', 'Authorization', 'Accept'],
  optionsSuccessStatus: 204,
  preflightContinue: false,
  credentials: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
}));

app.use(routes);

app.use((req, res, next) => {
    const e = new Error('Маршрут не найден');
    e.statusCode = 404;
    next(e);
});

app.use(errorHelper);

start();