var FullRecipeView = function (container, model) {
    model.addObserver(this);

    this.update = function () {
        var sout = "";
        var dishes = model.getFullMenu();
        for (var i = 0; i < dishes.length; i++) {
            sout += "<div class='row displayRecipe'> <div class='col-lg-2'><img class='img-responsive' src=" + '"' + dishes[i].data.image + '"' + "'/>"
                + "</div><div class='col-lg-4'> <h4 class='allCategoryDishesTitle'>" + dishes[i].name + "</h4>" +
                "<font>" + "This dish will take " + dishes[i].data.preparationMinutes + " minutes to prepare. For more information please " +
                "<a href=" + dishes[i].data.spoonacularSourceUrl + ">" + "Visit this website.</a>" + "</font></div><div class='col-lg-4'>" +
                " <h4 class='allCategoryDishesTitle'>Preparation</h4>" + "<font>" + dishes[i].data.instructions + "</font></div></div>";
        }
        container.html(sout);
    }
}