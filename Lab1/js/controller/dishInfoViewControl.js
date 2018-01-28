var DishInfoViewControl = function (view, model) {
    $('#confDinnerSideButt').click(function () {
        hideSpecificView("#searchForDish");
        hideSpecificView("#myDinnerView");
        hideSpecificView("#dishDisplayView");
        hideSpecificView("#infoAboutDish");
        displaySpecificView("#finalTitleView");
        displaySpecificView("#finalDinnerView");
    });

    view.numberGuests.change(function () {
        model.setNumberOfGuests(view.numberGuests.val());
    });
}