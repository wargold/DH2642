var FinalDishViewControl = function (view, model, hideDispView) {
    view.printFullRecipeButton.click(function () {
        hideDispView.printFullRecipeButtView();
    });
}