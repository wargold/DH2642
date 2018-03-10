import React, {Component} from 'react';
import './SubHeader.css';
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';
import {Link} from 'react-router-dom';


class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfGuests: modelInstance.getNumberOfGuests()
        }
    }

    render() {

        return (
            <div className="container-fluid border" id="finalTitleView">
                <div className="col-md-8 ">
                    <h2>{"My Dinner: "}
                        <div style={{display: "inline"}}>{modelInstance.getNumberOfGuests()}</div>
                        {" people"}
                    </h2>
                </div>
                <div className="col-xs-2 ">
                    <Link to="/search">
                        <button className='btn btn-lg btn-warning border'>
                            <span>Go back and edit dinner</span></button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SubHeader;
