var FinalNavBarViewControl = function (view, model, hideDispView) {
    view.goBackEditButton.click(function () {
        hideDispView.goBackEditView();
    });
}