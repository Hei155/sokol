const mongoose = require('mongoose');

const paramSchema = new mongoose.Schema({
    service: {
        type: String,
        required: false,
        minlength: 2,
        maxlength: 20,
    },

    budget: {
        type: String,
        required: false,
        minlength: 2,
        maxlength: 20,
    },

    about: {
        type: String,
        required: false,
        minlength: 2,
        maxlength: 20,
    },
})

module.exports = mongoose.model('param', paramSchema);