$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    var hideDisplayView = new HideDisplayView();

    // And create the instance of our Views
    var startView = new StartView($("#startView"),model);
    var startViewControl = new StartViewControl(startView, model, hideDisplayView);
    var dishInfoView = new DishInfoView($("#myDinnerView"), model);
    var dishInfoViewControl = new DishInfoViewControl(dishInfoView, model, hideDisplayView);
    var dishDisplayView = new DishDisplayView($("#mainView"), model);
    var dishDisplayViewControl = new DishDisplayViewControl(dishDisplayView, model, hideDisplayView);
    var dishFullInfoView = new DishFullInfoView($("#infoAboutDish"), model);
    var dishFullInfoViewControl = new DishFullInfoViewControl(dishFullInfoView, model,hideDisplayView);
    var finalNavBarView = new FinalNavBarView($("#finalTitleView"), model);
    var finalNavBarViewControl = new FinalNavBarViewControl(finalNavBarView, model,hideDisplayView);
    var finalDishView = new FinalDishView($("#finalDinnerView"), model);
    var finalDishViewControl = new FinalDishViewControl(finalDishView, model,hideDisplayView);
    var fullRecipeView = new FullRecipeView($("#displayRecipeView"), model);
    /**
     * IMPORTANT: app.js is the only place where you are allowed to
     * use the $('someSelector') to search for elements in the whole HTML.
     * In other places you should limit the search only to the children
     * of the specific view you're working with (see exampleView.js).
     */
});
