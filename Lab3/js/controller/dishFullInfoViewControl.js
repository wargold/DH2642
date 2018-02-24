var DishFullInfoViewControl = function (view, model, hideDispView) {
    view.addDishToMenuButton.click(function () {
        model.getAllIngredients(model.getClickedDishID(), function (dish) {
            var dishName = dish.title;
            var dishData = dish;
            var dishID = dish.id;
            var dishCategory = model.currentCategory();
            var dishPrice = (model.getCurrentDishPrice());
            model.addDishToMenu({name: dishName, id: dishID, category: dishCategory, price: dishPrice, data: dishData});
            hideDispView.addDishToMenuView();
            alert("You've added dish " + dishName + "." + '\n' + "The Total Cost for " + model.getNumberOfGuests() +
                " people " + "are " + Math.round(dishPrice*model.getNumberOfGuests()) +" SEK.")
        })
    });

    view.backDishInfoButton.click(function () {
        hideDispView.backButtonDishInfoView();
    });
}
