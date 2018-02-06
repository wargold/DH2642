var DishFullInfoViewControl = function (view, model, hideDispView) {
    view.addDishToMenuButton.click(function () {
        model.addDishToMenu(model.getClickedDishID());
        hideDispView.addDishToMenuView();
    });

    view.backDishInfoButton.click(function () {
        hideDispView.backButtonDishInfoView();
    });
}
