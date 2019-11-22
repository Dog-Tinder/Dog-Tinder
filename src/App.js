import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Dogs from './pages/Dogs';
import NewDog from './pages/NewDog';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import {getDogs} from './api'
import DogUpdate from './pages/DogUpdate'



class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                dogs: [],
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



    render() {
        return (
        <Router>
            <Header />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/dogs/" render={(props) => <Dogs dogs={this.state.dogs}/> } />
                        <Route exact path="/newdog" render={(props) => < NewDog getDogsLocal = {this.getDogsLocal} />} />
                        <Route exact path="/dogupdate/:id" render={(props) => < DogUpdate {...props} getDogsLocal = {this.getDogsLocal} />} />
                    </Switch>
                </div>
        </Router>
        );
    }
}

export default App;
