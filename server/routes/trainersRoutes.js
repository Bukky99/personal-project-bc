const mongoose = require("mongoose");
const Trainer = mongoose.model("trainers");

module.exports = (app) => {
  app.get("/api/trainer", async (req, res) => {
    const query = req.query.q;
    const result = await Trainer.find({ tags: {$all: query.split(/\s+/)}});
    res.json({
      message: "Here are your searched sneakers...", //test in postman
      shoes: result,
    });
  });

  app.get("/api/randomTrainer", async (req, res) => {
    const randomSearch = await Trainer.aggregate([{$sample: {size:1}}]);
    //console.log(randomSearch)
    res.json({
      message: "Your random sneaker", //test in postman
      shoe: randomSearch
    });
    
  });
};
