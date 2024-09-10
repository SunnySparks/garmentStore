const mongoose = require('mongoose');

const measurementSchema = new mongoose.Schema({
    name: { type: String, required: true },
    garmentType: { type: String, required: true },
    measurements: { type: String, required: true}, // '10x20x30'
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Measurement', measurementSchema);