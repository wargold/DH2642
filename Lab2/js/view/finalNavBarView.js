var FinalNavBarView = function (container, model) {
    model.addObserver(this);

    this.goBackEditButton = container.find('#goBackEdit');

    this.update = function () {
        container.find("#numbOfGuest").html(model.getNumberOfGuests());
    }
}