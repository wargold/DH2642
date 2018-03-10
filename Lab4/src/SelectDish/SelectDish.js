import React, {Component} from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import {modelInstance} from "../data/DinnerModel";
import {Link} from 'react-router-dom';

class SelectDish extends Component {
    constructor(props) {
        super(props);
        // We create the state to store the various statuses
        // e.g. API data loading or error
        this.state = {
            status: 'INITIAL',
            isloading: true,
            dishID: this.props.model.getClickedDishID(),
            dishInfo: '',
            numberOfGuests: this.props.model.getNumberOfGuests()
        }
    }

    // this methods is called by React lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to call the API and get the data
    componentDidMount = () => {
        // when data is retrieved we update the state
        // this will cause the component to re-render
        console.log(this.state.isloading)
        this.props.model.addObserver(this);
        modelInstance.getIngredient(this.state.dishID).then(dishes => {
            this.setState({
                status: 'LOADED',
                isloading: false,
                dishInfo: dishes
            })
        }).catch(() => {
            this.setState({
                status: 'ERROR'
            })
            alert("Check Your Internet Connection!")
        })
    }

    exit = () => {
        const dish = this.createDishInfo(this.state.dishInfo);
        modelInstance.addDishToMenu(dish);
        alert("You've added dish " + dish.name + "." + '\n' + "The Total Cost for " + this.state.numberOfGuests +
            " people " + "are " + Math.round(dish.price * this.state.numberOfGuests) + " SEK.")
    }

    createDishInfo = (data) => {
        const id = data.id;
        const name = data.title;
        const image = data.image;
        const readyMinInfo = `This dish will take ${data.readyInMinutes} minutes to prepare. For more information please `
        const readyMinInfoLink = data.spoonacularSourceUrl;
        const instructions = data.instructions;
        const ingredients = data.extendedIngredients;
        const ingredientsList = [];
        for (let i in ingredients) {
            let ing = ingredients[i];
            ingredientsList.push({name: ing.name, quantity: ing.amount, unit: ing.unit, price: ing.amount});
        }
        const price = (ingredientsList.reduce((a, b) => {
            return a + b.price
        }, 0));
        return {
            id, name, image, readyMinInfo, readyMinInfoLink, instructions, ingredientsList, price
        }
    }

    ingregient = () => {
        const dish = this.createDishInfo(this.state.dishInfo);
        const image = dish.ingredientsList.map((ingd, i) =>
            <div className='row' key={i}>
                <div className='col-lg-4'> {Math.round(ingd.quantity * this.state.numberOfGuests)}{" "}{ingd.unit}
                </div>
                <div className='col-lg-4'> {ingd.name} </div>
                <div className='col-lg-4'>{"SEK "}{Math.round(ingd.price * this.state.numberOfGuests)}{" "} </div>
                <br/>
            </div>
        )
        return image;
    }

    // this is called when component is removed from the DOM
    // good place to remove observer
    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }

    // in our update function we modify the state which will
    // cause the component to re-render
    update() {
        this.setState({
            numberOfGuests: this.props.model.getNumberOfGuests()
        })
    }

    render() {
        let dish = '';

        // depending on the state we either generate
        // useful message to the user or show the list
        // of returned dishes
        switch (this.state.status) {
            case 'INITIAL':
                dish = <em>Loading...</em>
                break;
            case 'LOADED':
                dish = this.createDishInfo(this.state.dishInfo)
                break;
            default:
                dish = <b>Failed to load data, please try again</b>
                break;
        }

        return (
            <div className="SelectDish">
                {/* We pass the model as property to the Sidebar component */}
                <Sidebar model={this.props.model}/>
                <div className="col-md-9" id="infoAboutDish">
                    <div className={`container ${this.state.isloading ? 'loader' : ''}`}>
                        {!this.state.isloading ? (
                            <div>
                                <div className="col-md-8">
                                    <h4>{dish.name}</h4>
                                    <img style={{width: "160px", height: "160px",}} className='img-responsive'
                                         src={dish.image}/>
                                    <div id="backButtonDishDet">
                                        <Link to="/search">
                                            <button className='btn btn-lg btn-warning border'>back to
                                                Select
                                                Dish
                                            </button>
                                        </Link>
                                    </div>
                                    <p>{dish.readyMinInfo}<a href={dish.readyMinInfoLink}>Visit this
                                        website.</a></p>
                                    <h2>Preperation</h2><br/>
                                    <p>{dish.instructions}</p>
                                </div>
                                <div className="col-md-4" id="ingredientView">
                                    <h3>Ingredients for {this.state.numberOfGuests} people
                                    </h3>
                                    <hr/>
                                    <div>
                                        {this.ingregient()}
                                    </div>
                                    <hr/>
                                    <Link to="/search">
                                        <button className='btn btn-lg btn-warning border'
                                                onClick={this.exit}>Confirm Dish
                                        </button>
                                    </Link>
                                    <div className="col-md-4"
                                         id="totalPriceOfIngredient"> {"SEK "}{Math.round(dish.price * this.state.numberOfGuests)}
                                    </div>
                                </div>
                            </div>
                        ) : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectDish;
