const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Corrected naming convention
const Videos = require('./dbModel.js');

// App Config
const app = express();
const port = 8081;
const connection_url = 'mongodb+srv://hynoras:quang23022002@cluster0.hxredev.mongodb.net/?retryWrites=true&w=majority';

// Middleware
app.use(express.json());
app.use(cors()); // Use cors middleware for handling CORS

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Server is running"));

app.post('/v2/posts', async (req, res) => {
    try {
        const dbVideos = req.body;
        const data = await Videos.create(dbVideos);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/v2/posts', async (req, res) => {
    try {
        const data = await Videos.find().exec();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
