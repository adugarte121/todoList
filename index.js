//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

var currentDay = new Date();
var options = {
  weekday: "long",
  month: "long",
  day: "numeric"
};
var day = currentDay.toDateString("en-US", options);


res.render("list", {today: day, newItems: items});
});

app.post("/", function(req, res){
  var item = req.body.inputText1;
  items.push(item);

  res.redirect("/");
});

/* currentDay = currentDay.getDay();
myDay = "";

switch (currentDay) {
case 0:
myDay = "Sunday";
break;
case 1:
myDay = "Monday";
break;
case 2:
myDay = "Tuesday";
break;
case 3:
myDay = "Wednesday";
break;
case 4:
myDay = "Thursday";
break;
case 5:
myDay = "Friday";
break;
case 6:
myDay = "Saturday";
break;
  default: console.log("Error");
}
*/




app.listen(process.env.PORT || port, function(){
  console.log("listening");
});
