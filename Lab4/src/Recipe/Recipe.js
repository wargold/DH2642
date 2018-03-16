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
            dish = menu[i];
            list.push(
                <div className='row displayRecipe' key={dish.id}>
                    <div className='col-lg-2'><img className='img-responsive' src={dish.image} alt={dish.name}/>
                    </div>
                    <div className='col-lg-4'><h4 className='allCategoryDishesTitle'> {dish.name}</h4>
                        <p> {dish.readyMinInfo}<a href={dish.readyMinInfoLink}>Visit this website.</a></p></div>
                    <div className='col-lg-4'><h4 className='allCategoryDishesTitle'>{"Preparation"}</h4>
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
                <div className="col-lg-12">{this.getInfoMenu()}</div>
            </div>
        );
    }
}
export default Confirm;
