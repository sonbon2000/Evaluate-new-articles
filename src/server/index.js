const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const aylien = require("aylien_textapi");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

const mockAPIResponse = require("./mockAPI.js");

// Server Setup and Routes
const port = 8080;

app.listen(port, function () {
  console.log(`Congratulations, your server is running at port ${port}!`);
});

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/testing", function (req, res) {
  textapi.sentiment(
    { url: req.body.urlInput },

    (error, response) => {
      if (error === null) {
        console.log("*** You have entered valid url ***");
        res.send(response);
      } else {
        console.log("*** You have entered invalid url ***");
        res.status(404).json({ validation: "Invalid url, please re-enter." });
      }
    }
  );
});
