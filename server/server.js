const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Mongoose
mongoose.connect(
  "mongodb+srv://charitha:charitha98@cluster0.pcmna.mongodb.net/Tours?retryWrites=true&w=majority"
);

// data schemas
const cardSchema = {
  url: String,
  title: String,
  price: String,
  duration: String,
  ratings: String,
};

// models
const Card = mongoose.model("Card", cardSchema);

// API routes
// GET
app.get("/cards", function (req, res) {
  Card.find().then((cards) => res.json(cards));
});

// Create
app.post("/createCard", function (req, res) {
  const url = req.body.url;
  const title = req.body.title;
  const price = req.body.price;
  const duration = req.body.duration;
  const ratings = req.body.ratings;

  const newCard = new Card({
    url,
    title,
    price,
    duration,
    ratings,
  });

  newCard.save();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
