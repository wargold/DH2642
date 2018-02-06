var DishInfoView = function (container, model) {
    model.addObserver(this);
    this.confDinnerSideButton = container.find('#confDinnerSideButt');
    this.numberGuests = container.find("#numberGuestsChooser");
    this.numberGuests.value = model.getNumberOfGuests();

    this.getContainer = function(){
        return container;
    }

    this.update = function () {
        var dish;
        this.numberGuests.val(model.getNumberOfGuests());
        var output = "";
        var menu = model.getFullMenu();
        for (var i = 0; i < menu.length; i++) {
            dish = menu[i];
            output += "<div class='row'><div class='col-md-6'>" + dish.name + "</div><div class='col-md-6 text-right'>"
                + model.getDishPrice(dish)+ "<button type='button' class='close removeDish' aria-label='Close' id=\"" + dish.id + "\">" +
                "<span aria-hidden='true'>&times;</span></button>" + "</div></div>";
        }
        container.find("#dishChoosenFromMenu").html(output);
        container.find("#currentDinnerCost").html("SEK: " + model.getTotalMenuPrice());
        if (model.getTotalMenuPrice() > 0) {
            container.find("#collapsedPrice").html("SEK: " + model.getTotalMenuPrice());
        }else {
            container.find("#collapsedPrice").html("");
        }
    }
}