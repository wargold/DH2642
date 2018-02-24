var HideDisplayView = function () {

    this.showDishView = function () {
        hideSpecificView("#searchForDish");
        hideSpecificView("#dishDisplayView");
        displaySpecificView("#infoAboutDish");
    }

    this.startDispView = function () {
        hideSpecificView("#startView");
        displaySpecificView("#mainView");
        displaySpecificView("#navbar")
        displaySpecificView("#myDinnerView");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
    }

    this.addDishToMenuView = function () {
        hideSpecificView("#infoAboutDish");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
    }

    this.backButtonDishInfoView = function () {
        hideSpecificView("#infoAboutDish");
        displaySpecificView("#searchForDish");
        displaySpecificView("#dishDisplayView");
    }

    this.confDinnerSideButtView = function () {
        hideSpecificView("#searchForDish");
        hideSpecificView("#myDinnerView");
        hideSpecificView("#dishDisplayView");
        hideSpecificView("#infoAboutDish");
        displaySpecificView("#finalTitleView");
        displaySpecificView("#finalDinnerView");
    }

    this.printFullRecipeButtView = function () {
        hideSpecificView("#finalDinnerView");
        displaySpecificView("#displayRecipeView");
    }

    this.goBackEditView = function () {
        hideSpecificView("#finalTitleView");
        hideSpecificView("#finalDinnerView");
        hideSpecificView("#displayRecipeView");
        displaySpecificView("#searchForDish");
        displaySpecificView("#myDinnerView");
        displaySpecificView("#dishDisplayView");
    }

// This function shows (display) a  View.
    function displaySpecificView(view) {
        $(view).css('display', 'block');
    }

// This function hides a View.
    function hideSpecificView(view) {
        $(view).css('display', 'none');
    }

    $(document).on({
        ajaxStart: function() { displaySpecificView("#loader") },
        ajaxComplete: function() { hideSpecificView("#loader"); }
    });
}

