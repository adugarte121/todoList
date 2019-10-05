//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var items = ["1", "2"];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  var currentDay = new Date();
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  var day = currentDay.toDateString("en-US", options);
  res.render("list", {
    listTitle: day,
    newItems: items
  });
});

app.post("/", function(req, res) {
  var item = req.body.inputText1;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }


});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work Items",
    newItems: workItems
  });
});

app.post("/work", function(req, res) {
  var item = req.body.inputText1;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(process.env.PORT || port, function() {
  console.log("listening");
});
