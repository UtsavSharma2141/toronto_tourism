$(document).ready(function() {

    $('#form1').submit(function(e) {
      e.preventDefault();
      var firstname = $('#name1').val();
      var email = $('#email1').val();
     var phone = $('#phone1').val();
     
      $(".error").remove();
  
      if (firstname.length < 1) {
        $('#name1').after('<span class="error"><p>This field is required</p></span>');
        return true;
      }
    
    else if (email.length < 1) {
        $('#email1').after('<span class="error">This field is required</span>');
         return false;
      }
      else if (phone.length < 1) {
        $('#phone1').after('<span class="error">This field is required</span>');
         return false;
      }
    else{
      window.open("thankyou.html");
    }
      
    });
      
  });