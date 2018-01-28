var FinalDishViewControl = function (view, model) {
    $('#printFullRecipeButt').click(function () {
        hideSpecificView("#finalDinnerView");
        displaySpecificView("#displayRecipeView");
    });
}