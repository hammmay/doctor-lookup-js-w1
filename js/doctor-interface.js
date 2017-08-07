//var Calculator = require('./../js/doctor.js').calculatorModule;
//var apiKey = "2de1822ca011132fd454ee68052dfd79"; actual doctor api
var apiKey = "e9c9d8bd9fdfabb69116a97bae75cfe5";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(JSON.stringify(response));
    });
  });
});
