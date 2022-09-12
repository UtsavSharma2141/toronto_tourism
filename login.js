

$(document).ready(function() {

    $('#first_form').submit(function(e) {
      e.preventDefault();
      var firstname = $('#first_name').val();
      var lastname = $('#last_name').val();
      var email = $('#email').val();
     var password = $('#password').val();
     
      $(".error").remove();
  
      if (firstname.length < 1) {
        $('#first_name').after('<span class="error">This field is required</span>');
      }
    
    if (password.length < 1) {
      $('#password').after('<span class="error">This field is required</span>');
    }
    
   else if (password.length < 8) {
        $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
        return false;
      }
      else if(!password.match(/[a-zA-Z]/)){
        $('#password').after('<span class="error">Password must be atleast 1 letter.</span>');
        return false;
      }
      else if(!password.match(/[0-9]/)){
        $('#password').after('<span class="error"> Password must be atleast 1 number.</span>');
        return false;
      }
      else if(!password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
  
      $('#password').after('<span class="error">Password must have least one special characters </span>');
    }

    else
    {
       
        window.open("thankyou2.html");
      
    }

    });
      
  });


  