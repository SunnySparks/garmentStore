const express = require('express');
const router = express.Router();
const Measurement = require('../models/Measurement')

router.post('/', async (req, res) => {
    try {
        const { name, garmentType, measurements } = req.body;
        const newMeasurement = new Measurement({name, garmentType, measurements});
        await newMeasurement.save();
    } catch (error) {
        res.status(500).json({message: "Error al guardar la medición"})
    }
});

router.get('/', async (req, res) => {
    try {
        const measurements = await Measurement.find();
        res.json(measurements);
    } catch (error) {
        res.status(500).json({message: "Error al obtener las mediciones"});
    }
})

module.exports = router;