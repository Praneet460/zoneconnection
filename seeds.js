var mongoose = require("mongoose");
var Company = require("./models/company");
var Police = require("./models/police");

//company/organisation data
var data = [
  {
    company : "Accenture",
    country : "Republic of Ireland",
    facebook : "https://www.facebook.com/accenture/",
    twitter : "https://twitter.com/Accenture",
},
{
  company : "Accenture",
  country : "Republic of Ireland",
  facebook : "https://www.facebook.com/accenture/",
  twitter : "https://twitter.com/Accenture",
}
]

//police organisation data

var datap = [
  {
    policeorg : "Ahmedabad City Police",
    state : "Gujarat",
    facebook : "https://www.facebook.com/ahmedabadcitypolice",
    twitter : "",
},
{
  policeorg : "Ahmedabad City Police",
  state : "Gujarat",
  facebook : "https://www.facebook.com/ahmedabadcitypolice",
  twitter : "",
}
]

    function seedDB(){

  //remove all companies
Company.remove({},function(err){
  if(err){
    console.log(err);
  }
  console.log("removed");
  //add companies
  data.forEach(function(seed){
    Company.create(seed,function (err,company) {
      if(err){
        console.log(err);
      }else{
        console.log("added company");
        //create a comment

      }
    });
  });
  });

  //remove all policeorg
Police.remove({},function(err){
  if(err){
    console.log(err);
  }
  console.log("removed policeorg");
  //add police
  datap.forEach(function(seed){
    Police.create(seed,function (err,police) {
      if(err){
        console.log(err);
      }else{
        console.log("added policeorg");
        }
    });
  });
  });
}
module.exports = seedDB;
