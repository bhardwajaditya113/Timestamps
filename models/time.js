const mongoose = require('mongoose');

const timestamp = mongoose.Schema({
    timestamp: {
        type: String
    }
})


module.exports = mongoose.model('time', timestamp);