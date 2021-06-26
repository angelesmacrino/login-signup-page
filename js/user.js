$(function() {
    $("#logoutButton").click(function(){
        alert("popo")
        localStorage.setItem("loggedIn", false);
        window.location.replace("../index.html");

    })
  });