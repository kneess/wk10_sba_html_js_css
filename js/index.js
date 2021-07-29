
function validate() {
    
    if($("#exampleInputEmail1").val() == '') 
      {
        $("#exampleInputEmail1").focus();
          var email = $("#exampleInputEmail1");
          email.css("background-color","yellow");
          alert("Enter email");


          return false;
      }
      else if ($("#exampleInputEmail1").val() != "abc@mail.com")
          {
            alert("wrong email");
            return false;
          }
      else
      {
        var email = $("#exampleInputEmail1").val();
      }

    if($("#exampleInputPassword1").val() == '')  
    {
      $("#exampleInputPassword1").focus();
          var pass = $("#exampleInputPassword1");
          pass.css("background-color","yellow");
          alert("Enter in password");
          return false;
    }
    else if ($("#exampleInputPassword1").val() != "abc")
    {
      alert("wrong password");
      return false;
    }
    else 
    {
      window.location.href = './dog-blog.html';
      return false;
    }
  }