var path = require("path");
const express = require("express");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");

// Require the Aylien npm package
const aylien = require("aylien_textapi");
const dotenv = require("dotenv");
dotenv.config();

// You could call it aylienapi, or anything else
const textapi = new aylien({
  application_id: `${process.env.API_ID}`,
  application_key: `${process.env.API_KEY}`,
});

const app = express();

app.use(cors());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.post("/testApi", function (req, res) {
  try {
    const data = textapi.sentiment(
      {
        text: req.body.text,
      },
      (error, response) => {
        if (error === null) {
          res.status(200).send(response);
        }
      }
    );
  } catch (err) {
    console.log("Error: " + err);
    return res.status(400).json({ messages: "Invalid response" });
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
