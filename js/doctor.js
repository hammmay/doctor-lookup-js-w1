//back-end

function DocDataQuery() {}

var apiKey = require('./../.env').apiKey;

DocDataQuery.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      var list = $('#doctors-list');
      list.text('');
      result['data'].forEach(function(element) {
        list.append('<li>' + element.profile.first_name + " " + element.profile.last_name + '</li>');
      })
    })
   .fail(function(error){
      console.log("fail");
  });
};

exports.doctorCode = DocDataQuery;
