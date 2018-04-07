var mongoose = require("mongoose");

var companySchema = new mongoose.Schema({
   company : String,
   country : String,
   facebook : String,
   twitter : String

 });

module.exports = mongoose.model("Company", companySchema);
