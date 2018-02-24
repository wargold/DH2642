var DishFullInfoView = function (container, model) {
    model.addObserver(this);

    this.addDishToMenuButton = container.find('#addDishToMenu');
    this.backDishInfoButton = container.find('#backButtonDishInfo');

    this.update = function (args) {
        if (notifyEvents.Dish_Clicked==args || notifyEvents.Guest){
            var dishID = model.getClickedDishID();
            var dishInfo = "";
            var ingredientText = "";
            var sum = 0;
            var numbOfGuest = 0;
            if (dishID > 0) {
                model.getAllIngredients(dishID, function (ingredient) {
                    container.find("#dishPicHeader").html(ingredient.title);
                    container.find("#detailImage").attr("src", ingredient.image);
                    dishInfo += "This dish will take " + ingredient.readyInMinutes + " minutes to prepare." + "\n";
                    dishInfo += "For more information please " + "<a href=" + ingredient.spoonacularSourceUrl +
                        ">" + "Visit this website.</a>";
                    container.find("#moreDishDescription").html(dishInfo);
                    container.find("#preperationInfo").html(ingredient.instructions);
                    numbOfGuest = model.getNumberOfGuests();
                    //console.log(ingredient.extendedIngredients.length);

                    ingredient.extendedIngredients.forEach(function (ingd) {
                        //console.log(dishID);
                        //console.log(ingd.name);
                        ingredientText += "<div class='row'> \ <div class='col-lg-4'>" + Math.round(ingd.amount * numbOfGuest) + " " + ingd.unit + "" +
                            "</div><div class='col-lg-4'>" + ingd.name + "</div><div class='col-lg-4'>SEK " +
                            Math.round(ingd.amount * numbOfGuest) + "\</div></div>";
                        sum += ingd.amount * numbOfGuest;
                    })
                    model.setCurrentDishPrice(Math.round(sum / model.getNumberOfGuests()));
                    container.find("#numbOfGuestIngredient").html(numbOfGuest);
                    container.find("#numbOfGuest").html(numbOfGuest);
                    container.find("#displayDishIngredient").html(ingredientText);
                    container.find("#totalPriceOfIngredient").html("SEK " + Math.round(sum));
                });
            }
        }


    }
}
