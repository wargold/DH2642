import React, {Component} from 'react';
import './Recipe.css';
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';
import SubHeader from '../SubHeader/SubHeader';


class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getInfoMenu = () => {
        var dish = "";
        var list = [];
        var menu = modelInstance.getFullMenu();
        for (var i = 0; i < menu.length; i++) {
            console.log(dish.readyMinInfoLink);
            dish = menu[i];
            list.push(
                <div class='row displayRecipe'>
                    <div class='col-lg-2'><img class='img-responsive' src={dish.image}/>
                    </div>
                    <div class='col-lg-4'><h4 class='allCategoryDishesTitle'> {dish.name}</h4>
                        <p> {dish.readyMinInfo}<a href={dish.readyMinInfoLink}>Visit this website.</a></p></div>
                    <div class='col-lg-4'><h4 class='allCategoryDishesTitle'>{"Preparation"}</h4>
                        <p> {dish.instructions}</p></div>
                </div>
        )
        }
        return list;
    }
    
    render() {

        return (
            <div>
                <SubHeader/>
                <div class="col-lg-12">{this.getInfoMenu()}</div>
            </div>
        );
    }
}
export default Confirm;
