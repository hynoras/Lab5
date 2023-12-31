// server.js
const express = require("express");
const mongoose = require("mongoose");
const Messages = require("./dbMessages.js");
const cors = require("cors");

const app = express();
const port = 8081;


app.use(express.json());
app.use(cors());

const url = "mongodb+srv://hynoras:quang23022002@cluster0.hxredev.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

const db = mongoose.connection;

app.get("/", (req, res) => res.status(200).send("Hi"));

app.post("/messages/new", async (req, res) => {
  const dbMessage = req.body;

  try {
    const data = await Messages.create(dbMessage);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.get("/messages/sync", async (req, res) => {
  try {
    const data = await Messages.find().exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));
