var DishDisplayViewControl = function (view, model, hideDispView) {

    view.showDishButton.click(function (e) {
        var dishID = $(e.target).parents('div').attr('value');
        console.log(dishID)
        model.setClickedDishID(dishID);
        hideDispView.showDishView();
    });

    view.dishCategorySelector.change(function () {
        var dish = view.dishSearchString.val().toLowerCase();
        model.setSearchDish(dish);
        var category = $(this).find("option:selected").text();
        model.setCurrentCategory(category);
    })

    view.searchForDishButton.click(function () {
        var dish = view.dishSearchString.val().toLowerCase();
        model.setSearchDish(dish);
        view.dishSearchString.val("");
    });
}