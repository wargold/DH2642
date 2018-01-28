var DishDisplayViewControl = function (view, model) {
    $('#showDishes').click(function (e) {
        var dishID = $(e.target).parents('div').attr('value');
        model.setClickedDishID(dishID);
        hideSpecificView("#searchForDish");
        hideSpecificView("#dishDisplayView");
        displaySpecificView("#infoAboutDish");
    });

    $('#dishCategory').change(function () {
        var category = $(this).find("option:selected").text();
        model.setCurrentCategory(category);
    })


    $('#searchForDishButt').click(function () {
        var dish = document.getElementById("searchForDishes").value.toLowerCase();
        model.setSearchDish(dish);
    });
}