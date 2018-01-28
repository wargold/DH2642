var StartViewControl = function (model) {
    $('#makeDinner').click(function () {
        hideSpecificView("#startView");
        displaySpecificView("#mainView");
        displaySpecificView("#navbar")
        displaySpecificView("#myDinnerView");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
        model.notifyObservers();
    });
};