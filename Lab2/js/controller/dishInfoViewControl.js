var DishInfoViewControl = function (view, model,hideDispView) {
    view.confDinnerSideButton.click(function () {
        hideDispView.confDinnerSideButtView();
    });

    view.numberGuests.change(function () {
        model.setNumberOfGuests(view.numberGuests.val());
    });

    var container = view.getContainer();
    $(container).on('click', '.removeDish', function(){
        model.removeDishFromMenus(this.id);
    });
}