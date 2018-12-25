$(document).ready(function(){
    
    $("button").click(function(){
        $("#clock").fadeToggle();
    });
});

function logout(){
    alert ("Logged out successfully");
    window.location = "../index.html"; // Redirecting to other page.
    return false;
}


