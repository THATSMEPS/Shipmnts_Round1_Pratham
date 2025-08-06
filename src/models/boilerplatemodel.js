const mongoose = require('mongoose');

const placeholderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Placeholder', placeholderSchema);