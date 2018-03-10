import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import {modelInstance} from './data/DinnerModel'
import SelectDish from "./SelectDish/SelectDish";
import Dishes from "./Dishes/Dishes";
import Confirm from "./Confirm/Confirm";
import Recipe from "./Recipe/Recipe";



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Dinner Planner',
        }
    }
    render() {
        modelInstance.init();
        return (
            <div className="App">
                <header className="App-header">
                    {/*<h1 className="App-title">{this.state.title}</h1>*/}

                    {/* We rended diffrent component based on the path */}
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/search" render={() => <Dishes model={modelInstance}/>}/>
                    <Route path="/selectDish/:dishID" render={()=> <SelectDish model={modelInstance}/>}/>
                    <Route path="/confirm" render={()=> <Confirm model={modelInstance}/>}/>
                    <Route path="/recipe" render={()=> <Recipe model={modelInstance}/>}/>
                </header>
            </div>
        );
    }
}

export default App;
