//jshint esversion:6

module.exports.getDate = function (){
const currentDay = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric"
};
return currentDay.toDateString("en-US", options);
};

module.exports.getDay = function (){
const currentDay = new Date();
const options = {
  weekday: "long",
};
return currentDay.toDateString("en-US", options);
};
