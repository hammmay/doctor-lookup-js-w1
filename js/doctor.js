//back-end
//var apiKey = "2de1822ca011132fd454ee68052dfd79"; actual doctor api

var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getWeather = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
