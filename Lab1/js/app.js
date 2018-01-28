$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    // And create the instance of our Views
    var startViewControl = new StartViewControl(model);
    var dishInfoView = new DishInfoView($("#myDinnerView"), model);
    var dishInfoViewControl = new DishInfoViewControl(dishInfoView, model);
    var dishDisplayView = new DishDisplayView($("#dishDisplayView"), model);
    var dishDisplayViewControl = new DishDisplayViewControl(dishDisplayView, model);
    var dishFullInfoView = new DishFullInfoView($("#infoAboutDish"), model);
    var dishFullInfoViewControl = new DishFullInfoViewControl(dishFullInfoView, model);
    var finalNavBarView = new FinalNavBarView($("#finalTitleView"), model);
    var finalNavBarViewControl = new FinalNavBarViewControl(finalNavBarView, model);
    var finalDishView = new FinalDishView($("#finalDinnerView"), model);
    var finalDishViewControl = new FinalDishViewControl(finalDishView, model);
    var fullRecipeView = new FullRecipeView($("#displayRecipeView"), model);
    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * use the $('someSelector') to search for elements in the whole HTML.
     * In other places you should limit the search only to the children
     * of the specific view you're working with (see exampleView.js).
     */
});

// This function shows (display) a  View.
function displaySpecificView(view) {
    $(view).css('display', 'block');
}

// This function hides a View.
function hideSpecificView(view) {
    $(view).css('display', 'none');
}
