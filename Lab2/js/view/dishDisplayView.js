var DishDisplayView = function (container, model) {
    model.addObserver(this);

    this.displayDish;
    this.showDishButton = container.find("#showDishes");
    this.searchForDishButton = container.find('#searchForDishButt')
    this.dishCategorySelector = container.find("#dishCategory");
    this.categories = model.getCategories();

    for (var category in this.categories) {
            this.dishCategorySelector.append($('<option>' + this.categories[category] + '</option>'));
    }

    this.update = function () {
        this.dishes = model.getAllDishes(model.currentCategory(), model.getSearchDish());
        displayDish = "";
        for (var i = 0; i < this.dishes.length; i++) {
            displayDish +=
                "<div style=\"width:160px;display:inline-table\"><div class='panel panel-default allCategoryDishes " +
                "border' value='" + this.dishes[i].id + "'><img class='img-responsive' src='images/" +
                this.dishes[i].image + "'/>\<div class='panel-footer allCategoryDishesTitle' " +
                "style=\"text-align:center;\">" + this.dishes[i].name + "</div></div></div>";
        }
        container.find("#showDishes").html(displayDish);
    }
}