var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("default").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "loginmatter.txt", true);
xmlhttp.send();

var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.validate = function() {
        $.getJSON("login.json", function(data) {
            if (  data.teammembers[0].username == $scope.username && data.teammembers[0].password == $scope.password){
                alert ("Login successfully");
                window.location = "Home/main.html"; // Redirecting to other page.
                return false;
            }
            else{
                alert("please enter valid credentials");
            }
        });
    };
});

window.onload = function(){
    var day;
    switch (new Date().getDay()) {
        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "Wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case  6:
        day = "Saturday";
        break;
        default:
        day = "No Day";
    }

    
document.getElementById("demo").innerHTML = "Today is " + day;
$("#demo").css("background-color", "yellow");
}

