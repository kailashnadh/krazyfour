//Created and Developed by Nikhil

"use strict";
var $$ = function(id) { return document.getElementById(id); };

//Getting Time using date variable
var displayCurrentTime = function() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var datenew = time.getDate();
    var monthnew = time.getMonth();
    var yearnew = time.getFullYear();
    if(hours>12){
        var num = hours-12;
        $$("hours").innerHTML = padSingleDigit(num);
        $$("ampm").innerHTML = "pm";
    }
    
    else if(hours==0){
        $$("hours").innerHTML = hours+"0";
        $$("ampm").innerHTML = "am";
    }
    
    else{
        $$("hours").innerHTML = hours;
        $$("ampm").innerHTML = "am";
    }
    $$("minutes").innerHTML = padSingleDigit(minutes);
    $$("seconds").innerHTML = padSingleDigit(seconds);
   // $$("date").innerHTML = datenew+"/"+monthnew+"/"+yearnew;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};


window.onload = function(){
    displayCurrentTime();
    setInterval(displayCurrentTime,1000);
    
};
//using API for weather and Date
var weatherLink = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys/";

$.getJSON(weatherLink, function (data) {
  
  var output = data.query.results
  var tempArray = output.channel.item.condition
  var temp = tempArray.temp
  var text = tempArray.text
  var dateFrom=tempArray.date
  var finalDate = dateFrom.substring(4, 16);
  
  $('#weather').append('Temperature : ' + temp + ' F<br>climate : '+text);
  $("#date").append('Date : '+finalDate+"<br>");
  
})



