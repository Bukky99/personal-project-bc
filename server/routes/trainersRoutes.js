const mongoose = require("mongoose");
const Trainer = mongoose.model("trainers");
//console.log(Trainer.find());
//const querystring = require("querystring");
//const url = "http://localhost:3000/api/trainers?q=jordan";

module.exports = (app) => {
  app.get("/api/trainer", async (req, res) => {
    const query = req.query.q;
    console.log("Q =", query);
    const result = await Trainer.find({ tags: {$all: query.split(/\s+/)}});
    console.log(query.split(/\s+/))
    console.log(result);
    res.json({
      message: "Here are your searched sneakers...",
      shoes: result,
    });
  });

  app.get("/api/randomTrainer", async (req, res) => {
    const randomSearch = await Trainer.aggregate([{$sample: {size:1}}]);
    console.log(randomSearch)
    res.json({
      message: "Your random sneaker",
      shoe: randomSearch
    });
    
  });
};
