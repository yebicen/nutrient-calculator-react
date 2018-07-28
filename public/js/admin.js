
$(document).ready(function() {
   //save user changes btn
   $("button#edituser").on("click",function(event){
    event.preventDefault();
    var id = $(this).data("userId"); 
    console.log(id);
    var userinfo = $(this).parents("td");
    var userdata = {
        firstname: userinfo.siblings("td.fn").children("input").val().trim(),
        lastname: userinfo.siblings("td.ln").children("input").val().trim(),
        username: userinfo.siblings("td.un").children("input").val().trim(),
        role: userinfo.siblings("td.ro").children("input").val().trim(),
        password: userinfo.siblings("td.pw").children("input").val().trim(),
        email: userinfo.siblings("td.em").children("input").val().trim()
        
      };
    $.ajax("/users/api/users/" + id, {
        type: "PUT",
        data: userdata
     }).then(
       function() {
          console.log("user data updated", userdata);
       // Reload the page to get the updated list
          location.reload();  //this doesn't work, you have to refresh the page
        }
       );


   });



   //delete user
   $("button#deleteuser").on("click",function(event){
     event.preventDefault();
     var id = $(this).data("userId"); 
     console.log(id);
     $.ajax("/users/api/users/" + id, {
        type: "delete",
        }).then(function(data){
            console.log("user id: "+id+" is deleted");
            location.reload();

        });
        
   });    

//    function deleteUser(event) {
//     event.stopPropagation();
//     var id = $(this).data("id");
//     $.ajax({
//       method: "DELETE",
//       url: "/api/todos/" + id
//     }).then(getusers);
//     }
//     function getusers() {
//         $.get("/api/users", function(data) {
//           users = data;
//           initializeRows();
//         });
//       }

   //add a new user
 
//    $("body").on('click',"button[id='addfn']",function(event){
   $("button#addnewuser").on("click",function(event){
    event.preventDefault();
    var userinfo = $(this).parents("td");
    
    var defusername = userinfo.siblings("td.fn").children("input").val().trim() + userinfo.siblings("td.ln").children("input").val().trim();
    var defpassword = "abc123";
    console.log(defusername);
    // userinfo.siblings("td.un").children("input").val(defusername);    
    // userinfo.siblings("td.pw").children("input").val(defpassword);  
    var userData = {
        firstname: userinfo.siblings("td.fn").children("input").val().trim(),
        lastname: userinfo.siblings("td.ln").children("input").val().trim(),
        username: defusername,
        role: userinfo.siblings("td.ro").children("input").val().trim(),
        password: defpassword,
        email: userinfo.siblings("td.em").children("input").val().trim()
        
      };
      console.log(userData);
      $.ajax("/users/api/users", {     
        type: "POST",  
        data: userData
      }).then(function(data) {
        window.location.replace(data);
        location.reload();
        // If there's an error, log the error
      });
      userinfo.siblings("td.fn").children("input").val("");
      userinfo.siblings("td.ln").children("input").val("");
      userinfo.siblings("td.un").children("input").val("");
      userinfo.siblings("td.ro").children("input").val("");
      userinfo.siblings("td.pw").children("input").val("");
      userinfo.siblings("td.em").children("input").val("");
   });



    // var loginForm = $("form.login");
    // var usernameInput = $("input#username-input");
    // var passwordInput = $("input#password-input");
  
    // // When the form is submitted, we validate there's an email and password entered
    // loginForm.on("submit", function(event) {
    //   event.preventDefault();
    //   var userData = {
    //     username: usernameInput.val().trim(),
    //     password: passwordInput.val().trim()
    //   };

    //   console.log(userData);

    //   if (!userData.username) {
    //     usernameInput.css("border", "solid 1px red");
    //     $("#username-feedback").text("Please enter a username");
    //     return;
    //   }
  
    //   if (!userData.password) {
    //     passwordInput.css("border", "solid 1px red");
    //     $("#password-feedback").text("Please enter a password");
    //     return;
    //   }
  
  
    //   // If we have an email and password we run the loginUser function and clear the form
    //   loginUser(userData.username, userData.password);
    //   usernameInput.val("");
    //   passwordInput.val("");
    // });
  
    // // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    // function loginUser(username, password) {
    //   $.post("/users/login", {            //"/users/login"
    //     username: username,
    //     password: password
    //   }).then(function(data) {
    //     window.location.replace(data);
    //     // If there's an error, log the error
    //   }).catch(function(err) {
    //     $("#password-feedback").text("Incorrect Username or Password");
    //   });
    // }
  
  });
    

