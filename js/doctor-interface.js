//var Calculator = require('./../js/doctor.js').calculatorModule;
//var apiKey = "2de1822ca011132fd454ee68052dfd79"; actual doctor api
var apiKey = "e9c9d8bd9fdfabb69116a97bae75cfe5";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
     .then(function(response){
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
     })

     .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});
