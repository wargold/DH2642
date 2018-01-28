var FinalNavBarView = function (container, model) {
    model.addObserver(this);

    this.update = function () {
        container.find("#numbOfGuest").html(model.getNumberOfGuests());
    }
}