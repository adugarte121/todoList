//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const date = require(__dirname + "/date.js");

const items = ["1", "2"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

let day = date.getDate();

  res.render("list", {
    listTitle: day,
    newItems: items
  });
});

app.post("/", function(req, res) {
  const item = req.body.inputText1;

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
  const item = req.body.inputText1;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(process.env.PORT || port, function() {
  console.log("listening");
});
