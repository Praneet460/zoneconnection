var mongoose = require("mongoose");

var policeSchema = new mongoose.Schema({
   policeorg : String,
   state : String,
   facebook : String,
   twitter : String

 });

module.exports = mongoose.model("Police", policeSchema);
