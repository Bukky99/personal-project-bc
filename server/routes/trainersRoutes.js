const mongoose = require("mongoose");
const Trainer = mongoose.model("trainers");
//console.log(Trainer.find());
//const querystring = require("querystring");
//const url = "http://localhost:3000/api/trainers?q=jordan";

module.exports = (app) => {
  app.get("/api/trainer", async (req, res) => {
    const query = req.query.q;
    console.log("Q =", query);
    const result = await Trainer.find({ tags: query });
    console.log(result);
    res.json({
      message: "Here are your searched sneakers...",
      shoes: result,
    });
  });
};
