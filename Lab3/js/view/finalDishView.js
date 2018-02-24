var FinalDishView = function (container, model) {
    model.addObserver(this);

    this.printFullRecipeButton = container.find('#printFullRecipeButt');

    this.update = function () {
        var dishInfo = "";
        var dinnerPrice = "";
        var dishes = model.getFullMenu();
        for (var i = 0; i < dishes.length; i++) {
            dinnerPrice = dishes[i].price;
            dishInfo +=
                "<div class='col-lg-2 allCategoryDishes' value='" + dishes[i].id + "'>" +
                "<img class='img-responsive' src=" + '"' + dishes[i].data.image + '"' + "'/><br><h4 class='allCategoryDishesTitle'>"
                + dishes[i].name + "</h4><p>" + Math.round(dinnerPrice*model.getNumberOfGuests()) + "SEK</p></div>";
        }
        container.find("#finalDinnerPrice").html(model.getTotalMenuPrice() + "  SEK");
        container.find("#dispFinalDinnerInfo").html(dishInfo);
    }
}