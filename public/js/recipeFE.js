$(document).ready(function () {
  var $RecipeNameInput = $("input#RecipeName");
  var $RecipeDescriptionInput = $("input#RecipeDescription");
  var $RecipeTypeInput = $("input#RecipeType");

  $(document).on("click", ".deleteRecipe", deleteRecipe);
  $(document).on("click", "#submitRecipe", insertRecipe);
  // $(document).on("click", ".editIngredient", editIngredient);

  $(document).on("click", "#addRecipeIngredient", addRecipeIngredient);
  var i = 1;
  function addRecipeIngredient () {
    i++;
  $( "#RecipeIngredientGroup .form-row:first-child" ).clone().appendTo( "#RecipeIngredientGroup" );

  }
  
// Make sure we wait to attach our handlers until the DOM is fully loaded.
function insertRecipe(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      RecipeIngredientsInputs = [];
      $('#RecipeIngredientGroup .form-row').each(function() {
        var inputs = {
          // IngredientId:$(this).find('.ingredientCol select option:selected').attr('data-id'),
          IngredientId: $(this).find('.ingredientCol select option:selected').attr('data-id'),
          AmountForSmall: $(this).find('.AmountForSmallCol input').val().trim(),
          AmountForMedium: $(this).find('.AmountForMediumCol input').val().trim(),
          AmountForLarge: $(this).find('.AmountForLargeCol input').val().trim()
        }
        RecipeIngredientsInputs.push(inputs);
      });
      var recipe = {
        RecipeName: $RecipeNameInput.val().trim(),
        RecipeDescription: $RecipeDescriptionInput.val().trim(),
        RecipeType: $RecipeTypeInput.val().trim(),
        RecipeIngredients: RecipeIngredientsInputs
      };
   
      // Send the POST request.
      $.ajax("/recipes/new", {
        type: "POST",
        data: recipe
      }).then(location.reload());
  
  }
  

  function deleteRecipe(event) {
    event.preventDefault();
    var id = $(this).attr('data-id');
    var name = $(this).attr('data-name');
    console.log(name);
    console.log(id);

    $('#RecipeNameDelete').html(name);

    $(document).on("click", "#confirmRecipeDelete", confirmRecipeDelete);

    function confirmRecipeDelete() {
        $.ajax({
            url: '/recipes/delete/' + id,
            type: 'DELETE'
          }).then(location.reload());
    }
}

});