var DishDisplayView = function (container, model) {
    model.addObserver(this);

    this.showDishButton = container.find("#showDishes");
    this.searchForDishButton = container.find('#searchForDishButt');
    this.dishCategorySelector = container.find("#dishCategory");
    this.dishSearchString = container.find("#searchForDishes");
    this.categories = model.getCategories();

    for (var category in this.categories) {
        this.dishCategorySelector.append($('<option>' + this.categories[category] + '</option>'));
    }

    this.update = function (args) {
        if (notifyEvents.Dish_Category == args || notifyEvents.Search == args || notifyEvents.Init == args) {
            model.getAllDishes(model.currentCategory(), model.getSearchDish(), function (data) {
                var displayDish = "";
                data.results.forEach(function (dish) {
                    displayDish +=
                        "<div style=\"width:160px;display:inline-table\"><div class='panel panel-default allCategoryDishes " +
                        "border' value='" + dish.id + "'><img class='img-responsive' src='https://webknox.com/recipeImages/" +
                        dish.image + "'/>\<div class='panel-footer allCategoryDishesTitle' " +
                        "style=\"text-align:center;\">" + dish.title + "</div></div></div>";
                });
                container.find("#showDishes").html(displayDish);
            });
        }
    }
}