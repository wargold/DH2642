import React from 'react';
import './Dishes.css';
// Alternative to passing the moderl as the component property, 
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import SearchInput from 'react-search-input'

class Dishes extends React.Component {
    constructor(props) {
        super(props);
        // We create the state to store the various statuses
        // e.g. API data loading or error
        this.state = {
            status: 'INITIAL',
            isloading: true,
            searchTerm: '',
            filterTerm: 'all'
        };
        this.searchUpdated = this.searchUpdated.bind(this)
        this.filterUpdated = this.filterUpdated.bind(this)
    }

    // this methods is called by React lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to call the API and get the data
    componentDidMount = () => {
        // when data is retrieved we update the state
        // this will cause the component to re-render
        this.loadData();
    }

    loadData(){
        modelInstance.getAllDishes(this.state.searchTerm, this.state.filterTerm).then(dishes => {
            this.setState({
                status: 'LOADED',
                isloading: false,
                dishes: dishes.results,
            })
        }).catch(() => {
            this.setState({
                status: 'ERROR'
            })
            alert("Check Your Internet Connection!")
        })
    }

    searchUpdated(term) {
        this.setState({searchTerm: term, isloading: true});
    }

    filterUpdated(type) {
        this.props = this.state.filterTerm;
        this.setState({filterTerm: type.target.value, isloading: true});
    }


    setDishClicked = (clicked) => {
        this.props.model.setClickedDishID(clicked);
    }

    getCategories = () => {
        let category = modelInstance.returnCategories().map((cat, i) =>
            <option value={cat} key={i}>{cat}</option>)
        return category

    }


    componentDidUpdate(prevProps, preState) {
        if(preState.filterTerm !==this.state.filterTerm || preState.searchTerm !== this.state.searchTerm){
            this.loadData();
        }
    }

    render() {
        let image = null;
        // depending on the state we either generate
        // useful message to the user or show the list
        // of returned dishes
        switch (this.state.status) {
            case 'INITIAL':
                image = " "
                break;
            case 'LOADED':
                image = this.state.dishes.map((image) =>
                    <Link to={`/selectDish/${image.id}`} key={image.id} onClick={() => this.setDishClicked(image.id)}>

                        <div key={image.id} style={{width: "160px", height: "160px", display: 'inline-table'}}
                             className="thumbNail">
                            <div className="panel panel-default allCategoryDishes border" key={image.id}
                                 value={image.id}>
                                <img style={{width: "160px", height: "160px",}} className='img-responsive' alt={image.name}
                                     key={image.id}
                                     src={"https://webknox.com/recipeImages/" + image.imageUrls}/>
                                <div className="panel-footer allCategoryDishesTitle"
                                     style={{textAlign: "center", fontWeight: "bold"}}>{image.title}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
                break;
            default:
                image = <b>Failed to load data, please try again</b>
                break;
        }

        return (
            <div>
                <Sidebar model={this.props.model}/>
                <div className="col-sm-9 autofix Dishes">
                    <div className="col-xs-12" id="cdf">
                        <div className="table" id="searchForDish">
                            <h2 id="findADishHeader">Find A Dish</h2>
                            <SearchInput className="search-input" type="text" onChange={this.searchUpdated}
                                         value={this.state.searchTerm}/>
                            <select id="dishCategory" onChange={this.filterUpdated}> {this.getCategories()}</select>
                            <hr/>
                        </div>
                        <div className={`container ${this.state.isloading ? 'loader' : ''}`}>
                            { !this.state.isloading ?(
                                <div className="table">
                                    {image}
                                </div>):null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishes;
