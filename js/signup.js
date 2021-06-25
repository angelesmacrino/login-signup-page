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
       $("#email").css("border-bottom","2px solid #34F458");
       error_email = false;
    } else {
       $("#emailErrorMessage").html("Invalid Email");
       $("#emailErrorMessage").show();
       $("#email").css("border","2px solid darkred");
       error_email = true;
    }
  }

  function checkPassword() {
    if ($("#password").val().length < 5) {
      $("#passwordErrorMessage").html("The password has to be at least 5 characters long");
      $("#passwordErrorMessage").show();
      $("#password").css("border","2px solid darkred");
      error_password = true;
    }
    else {
      $("#passwordErrorMessage").hide();
      $("#password").css("border","none");
      error_password = false;
   }
  }

  function checkRetypePassword() {
    if ($("#password").val() !== $("#retypePassword").val()) {
      $("#repeatPasswordErrorMessage").html("Passwords do not match");
      $("#repeatPasswordErrorMessage").show();
      $("#retypePassword").css("border","2px solid darkred");
      error_retype_password = true;
    } else {
      $("#passwordErrorMessage").hide();
      $("#retypePassword").css("border","none");
      error_retype_password = false;
    }
  }

  
  
  
  
  
})