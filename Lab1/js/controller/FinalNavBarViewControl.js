var FinalNavBarViewControl = function (view, model) {
    $('#goBackEdit').click(function () {
        hideSpecificView("#finalTitleView");
        hideSpecificView("#finalDinnerView");
        hideSpecificView("#displayRecipeView");
        displaySpecificView("#searchForDish");
        displaySpecificView("#myDinnerView");
        displaySpecificView("#dishDisplayView");
    });
}