//front-end

var Doctors = require('./../js/doctor.js').doctorCode;

$(document).ready(function() {
  var currentDoctor = new Doctors();
  $('#get-doc').click(function() {
    var symptom = $('#symptom').val();
    $('#doctors-list').val("");
    currentDoctor.getDoctors(symptom);
  });
});
