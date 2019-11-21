import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Dogs from './pages/Dogs';
import NewDog from './pages/NewDog';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import {getDogs} from './api'
import {createDog} from './api'


class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                dogs: []
            }
    }

    getDogsLocal = () => {
        getDogs()
        .then(APIdogs => {
            this.setState({
                dogs: APIdogs
            })
            console.log(this.state.dogs)
        })
    }

    componentDidMount() {
        this.getDogsLocal()
        console.log(this.state.dogs)
    }

    handleNewDog = (newDogInfo) => {
    	createDog(newDogInfo)
            .then(successDog => {
            console.log(this.state.dogs);
            console.log("SUCCESS! New dog: ", successDog);
            this.getDogsLocal()

        })
        // return fetch(`api/dogs`)
        console.log(this.state.dogs)
    }


    render() {
        return (
        <Router>
            <Header />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/dogs/" render={(props) => <Dogs dogs={this.state.dogs}/> } />
                        <Route exact path="/newdog" render={(props) => < NewDog handleNewDog = {this.handleNewDog}/>} />
                    </Switch>
                </div>
        </Router>
        );
    }
}

export default App;
