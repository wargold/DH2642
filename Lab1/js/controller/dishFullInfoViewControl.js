var DishFullInfoViewControl = function (view, model) {
    $('#addDishToMenu').click(function () {
        model.addDishToMenu(model.getClickedDishID());
        hideSpecificView("#infoAboutDish");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
    });

    $('#backButtonDishInfo').click(function () {
        hideSpecificView("#infoAboutDish");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
    });
}
