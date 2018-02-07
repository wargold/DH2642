var DishDisplayView = function (container, model) {
    model.addObserver(this);

    this.showDishButton = container.find("#showDishes");
    this.searchForDishButton = container.find('#searchForDishButt')
    this.dishCategorySelector = container.find("#dishCategory");
    this.categories = model.getCategories();

    for (var category in this.categories) {
            this.dishCategorySelector.append($('<option>' + this.categories[category] + '</option>'));
    }

    this.update = function () {
        var dishes = model.getAllDishes(model.currentCategory(), model.getSearchDish());
        var displayDish = "";
        for (var i = 0; i < dishes.length; i++) {
            displayDish +=
                "<div style=\"width:160px;display:inline-table\"><div class='panel panel-default allCategoryDishes " +
                "border' value='" + dishes[i].id + "'><img class='img-responsive' src='images/" +
                dishes[i].image + "'/>\<div class='panel-footer allCategoryDishesTitle' " +
                "style=\"text-align:center;\">" + dishes[i].name + "</div></div></div>";
        }
        container.find("#showDishes").html(displayDish);
    }
}