var FullRecipeView = function (container, model) {
    model.addObserver(this);

    this.update = function () {
        var sout="";
        this.dishes = model.getFullMenu();
        for (var i = 0; i < this.dishes.length; i++) {
            sout += "<div class='row displayRecipe'> <div class='col-lg-2'><img src='images/" + this.dishes[i].image + "'/>"
                + "</div><div class='col-lg-4'> <h4 class='allCategoryDishesTitle'>" + this.dishes[i].name + "</h4>" +
                "<font>" + this.dishes[i].description + "</font></div><div class='col-lg-4'> <h4 class='allCategoryDishesTitle'>Preparation</h4>" +
                "<font>" + this.dishes[i].description + "</font></div></div>";
        }
        container.html(sout);
    }
}