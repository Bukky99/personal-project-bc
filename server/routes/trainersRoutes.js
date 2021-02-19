const mongoose = require("mongoose");
const Trainer = mongoose.model("trainers");

module.exports = (app) => {
  app.get("/api/trainer", async (req, res) => {
    //parse out the query string
    const query = req.query.q;
    //match all docs where tag contains the tockenised query string
    const result = await Trainer.find({ tags: {$all: query.split(/\s+/)}});
    res.json({
      message: "Here are your searched sneakers...", 
      shoes: result,
    });
  });

  app.get("/api/randomTrainer", async (req, res) => {
    const randomSearch = await Trainer.aggregate([{$sample: {size:1}}]);
    res.json({
      message: "Your random sneaker",
      shoe: randomSearch
    });
    
  });
};
