var DishFullInfoView = function (container, model) {
    model.addObserver(this);

    this.addDishToMenuButton = container.find('#addDishToMenu');
    this.backDishInfoButton = container.find('#backButtonDishInfo');


    this.update = function () {
        var dish;
        dish = model.getDish(model.getClickedDishID());
        if (dish != null) {
            container.find("#dishPicHeader").html(dish.name);
            container.find("#detailImage").attr("src", "images/" + dish.image);
            container.find("#preperationInfo").html(dish.description);
            var ingredient;
            var ingredientText = "";
            var sum = 0;
            var numbOgGuest = 0;
            for (var i = 0; i < dish.ingredients.length; i++) {
                ingredient = dish.ingredients[i];
                numbOgGuest = model.getNumberOfGuests();
                ingredientText +=
                    "<div class='row'> \ <div class='col-lg-4'>" + Math.round(ingredient.quantity * numbOgGuest) + " " + ingredient.unit + "" +
                    "</div><div class='col-lg-4'>" + ingredient.name + "</div><div class='col-lg-4'>SEK " +
                    ingredient.price * numbOgGuest + " \</div></div>";
                sum += ingredient.price * numbOgGuest;
            }
            var numbOfGuest = model.getNumberOfGuests();
            container.find("#numbOfGuestIngredient").html(numbOfGuest);
            container.find("#numbOfGuest").html(numbOfGuest);
            container.find("#displayDishIngredient").html(ingredientText);
            container.find("#totalPriceOfIngredient").html("SEK " + sum);
        }
    }
}