var StartViewControl = function (view, model, hideDispView) {
    view.makeDinnerButton.click(function () {
        hideDispView.startDispView();
        model.getDish();
    });
};