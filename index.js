const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// routes
const measurementRoutes = require("./routes/measurements");
app.use('/api/measurements', measurementRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));