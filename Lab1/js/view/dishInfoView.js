var DishInfoView = function (container, model) {
    model.addObserver(this);
    this.numberGuests = container.find("#numberGuestsChooser");
    this.numberGuests.value = model.getNumberOfGuests();

    this.update = function () {
        var dish;
        var output = "";
        var menu = model.getFullMenu();
        for (var i = 0; i < menu.length; i++) {
            dish = menu[i];
            output += "<div class='row'> \
		 		<div class='col-md-6'>" + dish.name + "</div> \ <div class='col-md-6 text-right'>" + model.getDishPrice(dish) + "</div> \ </div>";
        }
        container.find("#dishChoosenFromMenu").html(output);
        container.find("#currentDinnerCost").html("SEK: " + model.getTotalMenuPrice());
        if (model.getTotalMenuPrice() > 0) {
            container.find("#collapsedPrice").html("SEK: " + model.getTotalMenuPrice());
        }
    }
}