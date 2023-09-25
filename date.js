//jshint esversion:6

module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate(){
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return day = today.toLocaleDateString("en-US", options);
};

function getDay(){
  let today = new Date();

  let options = {
    day: "numeric",
  };

  return day = today.toLocaleDateString("en-US", options);
};