var DishDisplayViewControl = function (view, model, hideDispView) {

    view.showDishButton.click(function (e) {
        var dishID = $(e.target).parents('div').attr('value');
        model.setClickedDishID(dishID);
        hideDispView.showDishView();
    });

    view.dishCategorySelector.change(function () {
        var category = $(this).find("option:selected").text();
        model.setCurrentCategory(category);
    })


    view.searchForDishButton.click(function () {
        var dish = document.getElementById("searchForDishes").value.toLowerCase();
        model.setSearchDish(dish);
    });
}