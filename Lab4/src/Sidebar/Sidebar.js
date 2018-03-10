import React, {Component} from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import {modelInstance} from "../data/DinnerModel";
import {Navbar} from 'react-bootstrap';
import {Col} from 'reactstrap';

let sum = 0;

class Sidebar extends Component {
    constructor(props) {
        super(props)

        // we put on state the properties we want to use and modify in the component
        this.state = {
            numberOfGuests: this.props.model.getNumberOfGuests(),
            menu: modelInstance.getFullMenu()
        }
    }

    // this methods is called by React lifecycle when the
    // component is actually shown to the user (mounted to DOM)
    // that's a good place to setup model observer
    componentDidMount() {
        this.props.model.addObserver(this);
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
            numberOfGuests: this.props.model.getNumberOfGuests(),
        })
    }

    // our handler for the input's on change event
    onNumberOfGuestsChanged = (e) => {
        this.props.model.setNumberOfGuests(+e.target.value)
    }

    getNumberOfGuests = () => {
        return this.state.numberOfGuests;
    }

    getInfoMenu = () => {
        var dish = ""
        var list = []
        var menu = this.state.menu;
        sum = 0;
        for (var i = 0; i < menu.length; i++) {
            dish = menu[i];
            list.push(<div className='row' key={i}>
                <div className='col-md-6' id="ksdsd"> {dish.name}</div>
                <div className='col-md-6 text-right'>{Math.round(dish.price * this.state.numberOfGuests)}
                    <button type='button' className='close removeDishSideBar'
                            onClick={this.removeDish.bind(this, dish.id)} aria-label='Close' id={dish.id}><span
                        aria-hidden='true'>&times;</span></button>
                </div>
            </div>)
            sum += Math.round(dish.price * this.state.numberOfGuests);
        }
        return list;
    }

    removeDish = (id, event) => {
        this.props.model.removeDishFromMenu(id);
    }

    render() {
        return (
            <Navbar collapseOnSelect className="navbar navbar-default Sidebar col-sm-3">
                <Col tag="nav" sm={3} md={3} className="d-none d-sm-block bg-light sidebar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <h5>{"My Dinner"}</h5>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse className="collapse navbar-collapse"><p id="people">{"People"}</p>
                        <input min="0" max="20" value={this.state.numberOfGuests}
                        onChange={this.onNumberOfGuestsChanged} type="number"/>
                        <div className="row" id="ksdsd">
                            <div className="col-xs-6">Dish Name</div>
                            <div className="col-xs-6 text-right">Cost</div>
                        </div>
                        <div>{this.getInfoMenu()}
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-xs-12 text-right">{"SEK "}{sum} </div>
                            <div className="fixed-bottom">
                            <Link to="/confirm">
                                <button className='btn btn-lg btn-warning border' id="teresfsdf">
                                    <p id="btnText">Confirm Dinner</p></button>
                            </Link>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Col>
            </Navbar>
        );
    }
}

export default Sidebar;
