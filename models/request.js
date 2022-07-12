const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    serviceType: {
        type: String,
        requred: true,
        minlength: 2,
        maxlength: 30,
    },
    
    budget: {
        type: String,
        requred: true,
        minlength: 1,
        maxlength: 12,
    },
    
    task: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
    },

    name: {
        type: String,
        required: false,
        maxlength: 20,
        minlength: 1,
    },

    phoneNumber: {
        type: String,
        required: true,
        maxlength: 11,
        minlength: 2,
    },

    email: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 30,
    },

    city: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 1,
    },

    about: {
        type: String,
        requred: true,
        minlength: 2,
        maxlength: 30,
    },

    time: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 10,
    },
})

module.exports = mongoose.model('request', requestSchema);