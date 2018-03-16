const httpOptions = {
    headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

const DinnerModel = function () {

    let numberOfGuests;
    let observers = [];
    let categories = ["all", "starter", "main dish", "dessert", "side dish", "appetizer", "drink", "bread", "sauce", "salad", "soup"];
    let clickedDishID;
    var menu = [];

    this.init = function(){
        if(!localStorage.getItem("numberOfGuests")){
            numberOfGuests=4;
        }else{
            numberOfGuests=localStorage.getItem("numberOfGuests");
        }
        if(!localStorage.getItem("clickedDishID")){
            clickedDishID="";
        }else{
            clickedDishID=localStorage.getItem("clickedDishID");
        }if(!localStorage.getItem("menu")){
            menu=[]
        }else{
            menu=JSON.parse(localStorage.getItem("menu"));
        }
    }

    this.setNumberOfGuests = function (num) {
        numberOfGuests = num;
        localStorage.setItem("numberOfGuests", num);
        notifyObservers();
    };

    this.getNumberOfGuests = function () {
        return numberOfGuests
    };

    this.getClickedDishID = function () {
        return clickedDishID
    }

    this.setClickedDishID = function (args) {
        clickedDishID = args;
        localStorage.setItem("clickedDishID", args);
    }

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        return menu;
    }

    this.addDishToMenu = function (obj) {
        for (var i in menu) {
            if (menu[i].id === obj.id) {
                menu.splice(i, 1);
            }
        }
        menu.push(obj);
        localStorage.setItem("menu", JSON.stringify(menu));
        notifyObservers();
    }

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        for (var i in menu) {
            if (menu[i].id === id) {
                menu.splice(i, 1);
                localStorage.setItem("menu", JSON.stringify(menu));
                notifyObservers();
            }
        }
    }

    // API Calls

    this.getAllDishes = function (qu, filter) {
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=16&type=${filter}&query=${qu}`;
        return fetch(url, httpOptions)
            .then(processResponse)
            .catch(handleError)
    }

    this.getIngredient = function (id) {
        const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information'
        return fetch(url, httpOptions)
            .then(processResponse)
            .catch(handleError)
    }

    // API Helper methods

    const processResponse = function (response) {
        if (response.ok) {
            return response.json()
        }
        throw response;
    }

    const handleError = function (error) {
        if (error.json) {
            error.json().then(error => {
                console.error('GET API Error:', error.message || error)
            })
        } else {
            console.error('GET API Error:', error.message || error)
        }
    }

    // Observer pattern

    this.addObserver = function (observer) {
        observers.push(observer);
    };

    this.removeObserver = function (observer) {
        observers = observers.filter(o => o !== observer);
    };

    const notifyObservers = function () {
        observers.forEach(o => o.update());
    };

    this.returnCategories = function () {
        return categories;
    }
};
export const modelInstance = new DinnerModel();
