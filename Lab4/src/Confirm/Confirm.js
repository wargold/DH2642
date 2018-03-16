import React, {Component} from 'react';
import './Confirm.css';
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';
import {Link} from 'react-router-dom';
import SubHeader from '../SubHeader/SubHeader';


let sum = 0;

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfGuests: modelInstance.getNumberOfGuests()
        }
    }

    getInfoMenu = () => {
        var dish = "";
        var list = [];
        var menu = modelInstance.getFullMenu();
        sum = 0;
        for (var i = 0; i < menu.length; i++) {
            dish = menu[i];
            list.push(
                <div className='col-lg-2 allCategoryDishes' key={dish.id} value={dish.id}><img
                    className='img-responsive' src={dish.image} alt={dish.name}/>
                    <br/>
                    <h4 className='allCategoryDishesTitle'>{dish.name}</h4>
                    <p>{Math.round(dish.price * modelInstance.getNumberOfGuests())}{" SEK"}</p></div>
            )
            sum += Math.round(dish.price * this.state.numberOfGuests);
        }
        return list;
    }


    render() {

        return (
            <div>
                <SubHeader/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 text-center" id="dispFinalDinnerInfo">{this.getInfoMenu()}</div>
                        <div className="col-sm-4" id="finTotPrice">
                            <h1>Total:
                                <div id="finalDinnerPrice">{sum}</div>
                            </h1>
                        </div>
                    </div>
                    <div className="col-sm-12 row">
                        <div style={{textAlign: "center"}}>
                            <Link to="/recipe">
                                <button id='printFullRecipeButt' className='btn btn-lg btn-warning border'>Print Full
                                    Recipe
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirm;
