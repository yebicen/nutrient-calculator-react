$(document).ready(function() {
    //save user changes btn
    $("button#saveprofile").on("click",function(event){
     event.preventDefault();
     var id = $(this).data("userId"); 
     console.log(id);
     
     //get data

     

     var userdata = {
         username: $(this).siblings("input#un1").val().trim(),
         password: $(this).siblings("input#pw1").val().trim(),
         email: $(this).siblings("input#em1").val().trim()       
       };
     console.log(userdata.username);
     console.log(userdata.password);
     console.log(userdata.email);
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

});