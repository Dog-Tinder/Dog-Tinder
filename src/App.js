import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Dogs from './pages/Dogs';
import NewDog from './pages/NewDog';
import "bootswatch/dist/sketchy/bootstrap.min.css";



class App extends Component {
    constructor(props){
    super(props)
    this.state = {
              dogs: [
                {
                  name: 'Woofus',
                  age: 2,
                  enjoys: "Long walks on the beach.",

                },
                {
                  name: 'Paws',
                  age: 4,
                  enjoys: "Snuggling by the fire."
                },
                {
                  name: 'Marge',
                  age: 12,
                  enjoys: "Being in charge."
                }
              ]
            }
          }
    render() {
        console.log(this.state.dogs)
        return (
        <Router>
            <Header />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/dogs/" render={(props) => <Dogs dogs={this.state.dogs}/> } />
                        <Route exact path="/newdog" component={NewDog} />
                    </Switch>
                </div>
        </Router>
        );
    }
}

export default App;
