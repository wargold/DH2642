var FinalDishView = function (container, model) {
    model.addObserver(this);

    this.printFullRecipeButton = container.find('#printFullRecipeButt');

    this.update = function () {
        var dishInfo = "";
        var dinnerPrice = "";
        this.dishes = model.getFullMenu();
        for (var i = 0; i < this.dishes.length; i++) {
            dinnerPrice = model.getDishPrice(this.dishes[i]);
            dishInfo +=
                "<div class='col-lg-2 allCategoryDishes' value='" + this.dishes[i].id + "'>" +
                "<img src='images/" + this.dishes[i].image + "'/><br><h4 class='allCategoryDishesTitle'>"
                + this.dishes[i].name + "</h4><p>" + dinnerPrice + "SEK</p></div>";
        }
        container.find("#finalDinnerPrice").html(model.getTotalMenuPrice() + " SEK");
        container.find("#dispFinalDinnerInfo").html(dishInfo);
    }
}