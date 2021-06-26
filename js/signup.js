$(function() {



  $("#emailErrorMessage").hide();
  $("#passwordErrorMessage").hide();
  $("#repeatPasswordErrorMessage").hide();

  $( ".form" ).slideDown( "slow", function() {
  });

  var emailError = false;
  var passwordError = false; //ES NECESARIO ESTO?????
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

  $("form").submit(function() {
    error_email = false;
    error_password = false;
    error_retype_password = false;   //ES NECESARIO ESTO?

    checkEmail();
    checkPassword();
    checkRetypePassword();

    if (error_email === false && error_password === false && error_retype_password === false) {
      alert("Registration Successfull");
      localStorage.setItem("loggedIn", true);
      window.location.href = "../pages/index.html";  //XQ NO ME DEVUELVE A LA MAIN PAGE?????
      //return true;

    } else {
      alert("Please Fill the form Correctly");
      return false;
    }

 });
  
  
})
