$(document).ready(function () {
    var $ingredientNameInput = $("input#ingredientName");
    var $CaloriesInput = $("input#Calories");
    var $CarbsInput = $("input#Carbs");
    var $SugarInput = $("input#Sugar");
    var $FatInput = $("input#Fat");
    var $ProteinInput = $("input#Protein");
    var $isGlutenFreeInput = $("input#isGlutenFree");
    var $isNutInput = $("input#isNut");
    var $isGMOInput = $("input#isGMO");

    var $ingredientNameInputEdit = $("input#ingredientName-edit");
    var $CaloriesInputEdit = $("input#Calories-edit");
    var $CarbsInputEdit = $("input#Carbs-edit");
    var $SugarInputEdit = $("input#Sugar-edit");
    var $FatInputEdit = $("input#Fat-edit");
    var $ProteinInputEdit = $("input#Protein-edit");
    var $isGlutenFreeInputEdit = $("input#isGlutenFree-edit");
    var $isNutInputEdit = $("input#isNut-edit");
    var $isGMOInputEdit = $("input#isGMO-edit");

    $('input[type="checkbox"]').change(function () {
        this.value ^= 1;
    });

    $(document).on("click", "#submitIngredient", insertIngredient);
    $(document).on("click", ".deleteIngredient", deleteIngredient);
    $(document).on("click", ".editIngredient", editIngredient);

    function insertIngredient(event) {
        event.preventDefault();
        var ingredient = {
            IngredientName: $ingredientNameInput.val().trim(),
            Calories: $CaloriesInput.val().trim(),
            Carbs: $CarbsInput.val().trim(),
            Sugar: $SugarInput.val().trim(),
            Fat: $FatInput.val().trim(),
            Protein: $ProteinInput.val().trim(),
            isGlutenFree: $isGlutenFreeInput.val().trim(),
            isNut: $isNutInput.val().trim(),
            isGMO: $isGMOInput.val().trim()
        };

        // $.post("/ingredients/new", ingredient).then(function() {
        //     location.reload();
        // });
        $.ajax({
            url: '/ingredients/new',
            type: 'POST',
            data: ingredient
        }).then(function() {
            console.log('edited!');
            location.reload();
        });

        $ingredientNameInput.val("");
        $isGlutenFreeInput.val("");
        $isNutInput.val("");
        $isGMOInput.val("");
        $CaloriesInput.val("");
        $CarbsInput.val("");
        $SugarInput.val("");
        $FatInput.val("");
        $ProteinInput.val("");
    }

    function deleteIngredient(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        var name = $(this).attr('data-name');
        console.log(name);

        $('#ingredientNameDelete').html(name);

        $(document).on("click", "#confirmDelete", confirmDelete);

        function confirmDelete() {
            $.ajax({
                url: '/ingredients/delete/' + id,
                type: 'DELETE'
            }).then(location.reload());
        }
    }

    function editIngredient(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        var name = $(this).attr('data-name');
            
        $('#ingredientNameEdit').html(name);

        $(document).on("click", "#confirmIngredientEdit", confirmEdit);
        
        function confirmEdit() {
            console.log('ingredient edit submitted...');
            var ingredient = {
                IngredientName: $ingredientNameInputEdit.val().trim(),
                Calories: $CaloriesInputEdit.val().trim(),
                Carbs: $CarbsInputEdit.val().trim(),
                Sugar: $SugarInputEdit.val().trim(),
                Fat: $FatInputEdit.val().trim(),
                Protein: $ProteinInputEdit.val().trim(),
                isGlutenFree: $isGlutenFreeInputEdit.val().trim(),
                isNut: $isNutInputEdit.val().trim(),
                isGMO: $isGMOInputEdit.val().trim()
            };
            console.log(ingredient);
            console.log(id);
            $.ajax({
                url: '/ingredients/edit/' + id,
                type: 'PUT',
                data: ingredient
            }).then(location.reload());
        }
    }

});