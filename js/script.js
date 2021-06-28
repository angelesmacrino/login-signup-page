
$(function() {
    let loginStatus = localStorage.getItem('loggedIn')
    if (loginStatus == "true") {
        $(".unlogged a").hide()
        $(".logged a").show()
        $(".logged").show()
        $(".pageDescription").hide()        
    }
    else {
        $(".unlogged a").show()
        $(".logged a").hide() 
    }
  });



