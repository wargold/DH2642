import React, {Component} from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome, container-fluid">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center" id="Lorem">
                        <p>Welcome to the dinner planner where you can search for dishes in the spoonacular API. This
                            website is created in React! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
                            amet felis sit amet lectus venenatis congue et sed odio. Aliquam in mi vitae nunc commodo
                            luctus. Nam euismod commodo elit nec convallis. Vivamus eget tincidunt risus, ut laoreet
                            sapien. Nullam sapien mi, facilisis finibus pulvinar non, feugiat eu enim.
                            Nunc a lobortis mi.</p>
                        <Link to="/search">
                            <button id='makeDinner' className='btn btn-lg btn-warning btn border'><span>Create new dinner</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
