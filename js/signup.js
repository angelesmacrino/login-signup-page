$(function() {

  $("#emailErrorMessage").hide();
  $("#passwordErrorMessage").hide();
  $("#repeatPasswordErrorMessage").hide();

  $( ".form" ).slideDown( "slow", function() {
  });

  var emailError = false;
  var passwordError = false; 
  var repeatPasswordError = false;

  $("#email").focusout(function() {
    checkEmail();
  });


  $("#password").focusout(function() {
    checkPassword();
  });


  $("#retypePassword").focusout(function() {
    checkRetypePassword();
  });

  function checkEmail() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    if (pattern.test(email) && email !== '') {
       $("#emailErrorMessage").hide();
       $("#email").css("border","none");
       emailError = false;
    } else {
       $("#emailErrorMessage").html("Invalid Email");
       $("#emailErrorMessage").show();
       $("#email").css("border","2px solid darkred");
       emailError = true;
    }
  }

  function checkPassword() {
    if ($("#password").val().length < 5) {
      $("#passwordErrorMessage").html("The password has to be at least 5 characters long");
      $("#passwordErrorMessage").show();
      $("#password").css("border","2px solid darkred");
      passwordError = true;
    }
    else {
      $("#passwordErrorMessage").hide();
      $("#password").css("border","none");
      passwordError = false;
   }
  }

  function checkRetypePassword() {
    if ($("#password").val() !== $("#retypePassword").val()) {
      $("#repeatPasswordErrorMessage").html("Passwords do not match");
      $("#repeatPasswordErrorMessage").show();
      $("#retypePassword").css("border","2px solid darkred");
      repeatPasswordError = true;
    } else {
      $("#passwordErrorMessage").hide();
      $("#retypePassword").css("border","none");
      repeatPasswordError = false;
    }
  }

  $("form").submit(function(e) {
    emailError = false;
    passwordError = false;
    repeatPasswordError = false;   //ES NECESARIO ESTO?

    checkEmail();
    checkPassword();
    checkRetypePassword();

    if (emailError === false && passwordError === false && repeatPasswordError === false) {
      alert("Registration Successfull");
      localStorage.setItem("loggedIn", true);
      window.location.href = "../pages/user.html";
      e.preventDefault();
      window.location.assign("../index.html"); 
      return true;

    } else {
      alert("Please Fill the form Correctly");
      return false;
    }

 });
  
})
