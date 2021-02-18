const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// IMPORT YOUR MODELS
require("./models/TrainersDB");
require("./models/Request");

//CONNECT TO MONGOOSE
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/black-codher-personal-project`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(bodyParser.json());
//this is old-fashioned
// IMPORT YOUR ROUTES
require("./routes/trainersRoutes")(app);
require("./routes/requestsRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  });
}

app.get("/", function (req, res) {
  res.status(200).send("working");
});

// using an environment variable to grab port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
